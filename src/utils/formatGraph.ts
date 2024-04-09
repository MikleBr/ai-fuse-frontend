import axios from "axios";
import { Edge, Node } from "reactflow";

export const constructGraphs = (
  reactFlowNodes: Node[],
  reactFlowEdges: Edge[],
  options?: { isNonDirected?: boolean; isReversed?: boolean }
) => {
  const nodeDependencies: any = {};
  const graph: any = {};

  for (let i = 0; i < reactFlowNodes.length; i += 1) {
    const nodeId = reactFlowNodes[i].id;
    nodeDependencies[nodeId] = 0;
    graph[nodeId] = [];
  }

  if (options && options.isReversed) {
    for (let i = 0; i < reactFlowEdges.length; i += 1) {
      const source = reactFlowEdges[i].source;
      const target = reactFlowEdges[i].target;

      if (Object.prototype.hasOwnProperty.call(graph, target)) {
        graph[target].push(source);
      } else {
        graph[target] = [source];
      }

      nodeDependencies[target] += 1;
    }

    return { graph, nodeDependencies };
  }

  for (let i = 0; i < reactFlowEdges.length; i += 1) {
    const source = reactFlowEdges[i].source;
    const target = reactFlowEdges[i].target;

    if (Object.prototype.hasOwnProperty.call(graph, source)) {
      graph[source].push(target);
    } else {
      graph[source] = [target];
    }

    if (options && options.isNonDirected) {
      if (Object.prototype.hasOwnProperty.call(graph, target)) {
        graph[target].push(source);
      } else {
        graph[target] = [source];
      }
    }
    nodeDependencies[target] += 1;
  }

  return { graph, nodeDependencies };
};

export const getEndingNodes = (nodeDependencies: any, graph: any) => {
  const endingNodeIds: string[] = [];
  Object.keys(graph).forEach((nodeId) => {
    if (Object.keys(nodeDependencies).length === 1) {
      endingNodeIds.push(nodeId);
    } else if (!graph[nodeId].length && nodeDependencies[nodeId] > 0) {
      endingNodeIds.push(nodeId);
    }
  });
  return endingNodeIds;
};

type NodeFunctionParams = {
  currentNode: Node;
  depsData: any[];
};

const getNodeFunctionByType = (type: string) => {
  if (type === "generateImage") {
    return async ({ depsData }: NodeFunctionParams) => {
      const inputPrompt = depsData[0]
      if (typeof inputPrompt !== "string") throw Error("Что-то не так");

      const response = await axios.post("/api/generate-image", {
        prompt: inputPrompt
      });

      return response.data[0];
    };
  }

  if (type === "removeBG") {
    return async ({ depsData }: NodeFunctionParams) => {
      const image = depsData[0]
      if (typeof image !== "string") throw Error("Что-то не так");

      const response = await axios.post("/api/generate-image", {
        image
      });

      return response.data;
    };
  }

  if (type === "becomeImage") {
    return async ({ depsData }: NodeFunctionParams) => {
      const image = depsData[0];
      const imageToBecome = depsData[1];
      console.log("🚀 ~ return ~ imageToBecome:", imageToBecome)
      if (typeof image !== "string") throw Error("Что-то не так");

      const response = await axios.post("/api/become-image", {
        image,
        image_to_become: imageToBecome
      });

      return response.data[0];
    };
  }

  if (type === "faceToSticker") {
    return async ({ depsData }: NodeFunctionParams) => {
      const image = depsData[0];
      if (typeof image !== "string") throw Error("Что-то не так");

      const response = await axios.post("/api/face-to-sticker", {
        image,
      });

      return response.data[0];
    };
  }

  if (type === "text") {
    return async ({ currentNode }: NodeFunctionParams) => {
      return currentNode.data.value;
    };
  }

  if (type === "image") {
    return async ({ currentNode }: NodeFunctionParams) => {
      return currentNode.data.value;
    };
  }

  // Конская залупа
  if (type === "result") {
    return null;
  }

  return null;
};

export const runGraph = (
  nodes: Node[],
  reversedGraph: Record<string, string[]>,
  endNodeId: string,
  onStartRunNode: (node: Node, inputData: any) => void,
  onEndRunNode: (node: Node, outputData: any) => void,
  onRunNodeError: (node: Node, error: any) => void,
) => {
  const runNode = async (nodeId: string): Promise<any> => {
    console.log("running node : ", nodeId)
    const node = nodes.find((node) => node.id === nodeId);
    if (!node) throw Error("Хуевый у тебя граф получился");
    // FIXME какая епта || ''
    const func = getNodeFunctionByType(node.type || "");

    const nodeDeps = reversedGraph[nodeId];

    const depsResultPromise = nodeDeps.map((nodeId) => {
      return runNode(nodeId);
    });

    const depsResult = await Promise.all(depsResultPromise);

    onStartRunNode(node, depsResult);

    if (!func) {
      onEndRunNode(node, depsResult);
      return [];
    }

    try {
      const nodeResult = await func({
        depsData: depsResult,
        currentNode: node,
      });
      onEndRunNode(node, nodeResult);
      return nodeResult;
    } catch (error) {
      onRunNodeError(node, error);
    }
  };

  runNode(endNodeId);
};
