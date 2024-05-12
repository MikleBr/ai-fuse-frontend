import ReactFlow, {
  Background,
  BackgroundVariant,
  Node,
  ReactFlowInstance,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import { Sidebar } from "./Sidebar";
import { Toolbar } from "./Toolbar";
import { TestNode } from "@/shared/ReactFlowNodes/TestNode";
import { NodeData } from "@/shared/ReactFlowNodes/types";
import { DragEventHandler, useCallback, useState } from "react";
import { getReversedGraph } from "@/shared/ReactFlowNodes/formatGraph";
import { GraphContextProvider } from "@/shared/ReactFlowNodes/GraphContext";
import { cloneDeep } from "lodash";
import example from "/public/Pngmaker.png";
import { getNodeDataByName } from "@/shared/ReactFlowNodes/getNodeDataByName";

const nodeTypes = {
  custom: TestNode,
};

let count = 0;
const getId = () => {
  count++;
  return `custom-node-id_${count}`;
};

export function Page() {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback<DragEventHandler<HTMLDivElement>>((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      if (!reactFlowInstance) return;

      const modelName = event.dataTransfer.getData("application/reactflow");

      if (typeof modelName === "undefined" || !modelName) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type: "custom",
        position,
        data: getNodeDataByName(modelName),
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const runBlock = (resultType: NodeData["result"]["type"]) => () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (resultType === "image") {
          res({
            image: example.src,
          });
        }
        if (resultType === "images") {
          res({
            images: [example.src, example.src, example.src, example.src],
          });
        }
        if (resultType === "text") {
          res({
            text: "Hello, world!",
          });
        }

        rej("");
      }, 10000);
    });
  };

  const nodePending = (node: Node<NodeData>, inputData: any) => {
    setNodes((nodes) => {
      const updatedNodeIndex = nodes.findIndex((nd) => nd.id === node.id);
      if (updatedNodeIndex !== -1) {
        const updatedNode = cloneDeep(nodes[updatedNodeIndex]);
        updatedNode.data.status = "pending";
        const newNodes = [...nodes];
        newNodes[updatedNodeIndex] = updatedNode;
        return newNodes;
      }
      return nodes;
    });
  };
  const nodeSuccess = (node: Node<NodeData>, data: any) => {
    setNodes((nodes) => {
      const updatedNodeIndex = nodes.findIndex((nd) => nd.id === node.id);
      if (updatedNodeIndex !== -1) {
        const updatedNode = cloneDeep(nodes[updatedNodeIndex]);
        updatedNode.data.result.data = data;

        updatedNode.data.status = "success";
        const newNodes = [...nodes];
        newNodes[updatedNodeIndex] = updatedNode;
        return newNodes;
      }
      return nodes;
    });
  };
  const nodeError = (node: Node<NodeData>, error: unknown) => {
    setNodes((nodes) => {
      const updatedNodeIndex = nodes.findIndex((nd) => nd.id === node.id);
      if (updatedNodeIndex !== -1) {
        const updatedNode = cloneDeep(nodes[updatedNodeIndex]);
        updatedNode.data.status = "error";
        const newNodes = [...nodes];
        newNodes[updatedNodeIndex] = updatedNode;
        return newNodes;
      }
      return nodes;
    });
  };

  const nodeWaitForExecute = (nodeId: string) => {
    setNodes((nodes) => {
      const updatedNodeIndex = nodes.findIndex((nd) => nd.id === nodeId);
      if (updatedNodeIndex !== -1) {
        const updatedNode = cloneDeep(nodes[updatedNodeIndex]);
        updatedNode.data.status = "waitForExecute";
        const newNodes = [...nodes];
        newNodes[updatedNodeIndex] = updatedNode;
        return newNodes;
      }
      return nodes;
    });
  };

  const prepareNode = (nodeId: string) => {
    const { graph: reversedGraph } = getReversedGraph(nodes, edges);

    const node = nodes.find((node) => node.id === nodeId);
    if (!node) throw Error("Хуевый у тебя граф получился");

    if (node.data.result.data){
      return;
    }

    nodeWaitForExecute(nodeId);
    const nodeDeps = reversedGraph[nodeId];
    nodeDeps.forEach((depNodeId) => {
      prepareNode(depNodeId);
    });
  };

  const onRunNode = (nodeId: string) => {
    const { graph: reversedGraph } = getReversedGraph(nodes, edges);

    prepareNode(nodeId)

    const runNode = async (nodeId: string): Promise<any> => {
      const node = nodes.find((node) => node.id === nodeId);
      if (!node) throw Error("Хуевый у тебя граф получился");

      if (node.data.result.data){
        return node.data.result.data
      }

      const func = runBlock(node.data.result.type);

      const nodeDeps = reversedGraph[nodeId];

      const depsResultPromise = nodeDeps.map((nodeId) => {
        return runNode(nodeId);
      });

      const depsResult = await Promise.all(depsResultPromise);

      nodePending(node, depsResult);

      try {
        const nodeResult = await func();
        nodeSuccess(node, nodeResult);
        return nodeResult;
      } catch (error) {
        nodeError(node, error);
      }
    };

    runNode(nodeId);
  };

  // TODO: Вынести это в фичу. Возможно переиспользование
  return (
    <GraphContextProvider runNode={onRunNode}>
      <div className="w-screen h-screen pt-12 flex relative">
        <Toolbar />
        <Sidebar />
        <div className="h-full flex-1">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            onConnect={onConnect}
            maxZoom={1}
            edgesFocusable
            edgesUpdatable
            nodesFocusable
            onInit={setReactFlowInstance}
            fitView
            snapToGrid
            snapGrid={[25, 25]}
            onDrop={onDrop}
            onDragOver={onDragOver}
            connectionLineStyle={{
              stroke: "#1a192b",
              strokeWidth: 4,
            }}
            defaultEdgeOptions={{
              style: {
                stroke: "#facc15",
                strokeWidth: 4,
              },
            }}
            // translateExtent={[[-2000, -1000], [1000, 2000]]}
            // style={{
            //   backgroundColor: "#D3D2E5",
            // }}
          >
            <Background
              id="1"
              gap={50}
              color="#c3c3c3"
              variant={BackgroundVariant.Lines}
            />
          </ReactFlow>
        </div>
      </div>
    </GraphContextProvider>
  );
}
