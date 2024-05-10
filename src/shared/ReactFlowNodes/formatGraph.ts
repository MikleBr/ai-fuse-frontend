import { Edge, Node } from "reactflow";
import { NodeData } from "./types";

export const blockDependencies = (
  reactFlowNodes: Node<NodeData>[],
  reactFlowEdges: Edge[],
) => {
  const nodeDependencies: Record<string, number> = {};
  const graph: Record<string, string[]> = {};

  // Записываем пустые значения в nodeDependencies и graph
  reactFlowNodes.forEach((node) => {
    const nodeId = node.id;
    nodeDependencies[nodeId] = 0;
    graph[nodeId] = [];
  });

  // Теперь перебираем все ребра и подставляем зависимости
  reactFlowEdges.forEach((edge) => {
    const source = edge.source;
    const target = edge.target;

    graph[source].push(target);
    nodeDependencies[target] += 1;
  });

  return { graph, nodeDependencies };
};

export const getReversedGraph = (
  reactFlowNodes: Node<NodeData>[],
  reactFlowEdges: Edge[],
) => {
  const nodeDependencies: Record<string, number> = {};
  const graph: Record<string, string[]> = {};

  // Записываем пустые значения в nodeDependencies и graph
  reactFlowNodes.forEach((node) => {
    const nodeId = node.id;
    nodeDependencies[nodeId] = 0;
    graph[nodeId] = [];
  });

  // Теперь перебираем все ребра и подставляем зависимости
  reactFlowEdges.forEach((edge) => {
    const source = edge.source;
    const target = edge.target;

    graph[target].push(source);
    nodeDependencies[target] += 1;
  });

  return { graph, nodeDependencies };
};

export const constructGraphs = (
  reactFlowNodes: Node<NodeData>[],
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

// export const runGraph = (
//   nodes: Node[],
//   reversedGraph: Record<string, string[]>,
//   endNodeId: string,
//   onStartRunNode: (node: Node, inputData: any) => void,
//   onEndRunNode: (node: Node, outputData: any) => void,
//   onRunNodeError: (node: Node, error: any) => void,
// ) => {
  // const runNode = async (nodeId: string): Promise<any> => {
  //   console.log("running node : ", nodeId)
  //   const node = nodes.find((node) => node.id === nodeId);
  //   if (!node) throw Error("Хуевый у тебя граф получился");
  //   // FIXME какая епта || ''
  //   const func = () => {}

  //   const nodeDeps = reversedGraph[nodeId];

  //   const depsResultPromise = nodeDeps.map((nodeId) => {
  //     return runNode(nodeId);
  //   });

  //   const depsResult = await Promise.all(depsResultPromise);

  //   onStartRunNode(node, depsResult);

  //   if (!func) {
  //     onEndRunNode(node, depsResult);
  //     return [];
  //   }

  //   try {
  //     const nodeResult = await func({
  //       depsData: depsResult,
  //       currentNode: node,
  //     });
  //     onEndRunNode(node, nodeResult);
  //     return nodeResult;
  //   } catch (error) {
  //     onRunNodeError(node, error);
  //   }
//   };

//   runNode(endNodeId);
// };
