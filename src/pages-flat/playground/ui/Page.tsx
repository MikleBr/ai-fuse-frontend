import { DragEventHandler, useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Background,
  Handle,
  Position,
  addEdge,
  useEdgesState,
  useNodeId,
  useNodesState,
  useStore,
} from "reactflow";

import { NodeWrapper } from "@/shared/ReactFlowNodes/NodeWrapper";
import { InputNode } from "@/shared/ReactFlowNodes/util-nodes/InputNode";
import { ImageNode } from "@/shared/ReactFlowNodes/util-nodes/ImageNode";

import { constructGraphs, getEndingNodes, runGraph } from "@/app/formatGraph";
import { cloneDeep } from "lodash";
import { GenerateImageNode } from "@/shared/ReactFlowNodes/replicate-nodes/GenerateImageNode";
import { RemoveBackgroudNode } from "@/shared/ReactFlowNodes/replicate-nodes/RemoveBackgroudNode";
import { BecomeImageNode } from "@/shared/ReactFlowNodes/replicate-nodes/BecomeImageNode";
import { FaceToStickerNode } from "@/shared/ReactFlowNodes/replicate-nodes/FaceToStickerNode";
import { Button } from "@/shared/components";
import { Sidebar } from "./Sidebar";
import { Toolbar } from "./Toolbar";

const nodeTypes = {
  image: ImageNode,
  text: InputNode,
  generateImage: GenerateImageNode,
  result: ResultNode,
  removeBG: RemoveBackgroudNode,
  becomeImage: BecomeImageNode,
  faceToSticker: FaceToStickerNode,
};

function getDefaultNodeDataByType(type: string) {
  if (type === "generateImage") {
    return {
      status: "init",
      inputType: ["string"],
      outputType: "image",
    };
  }

  if (type === "faceToSticker") {
    return {
      status: "init",
      inputType: "image",
      outputType: "image",
    };
  }

  if (type === "text") {
    return {
      outputType: "string",
    };
  }
  if (type === "removeBG") {
    return {
      status: "init",
      inputType: "image",
      outputType: "image",
    };
  }
  if (type === "result") {
    return {
      result: null,
    };
  }
  if (type === "becomeImage") {
    return {
      status: "init",
      inputType: ["image", "image"],
      outputType: "image",
    };
  }
  return {};
}

let id = 0;
const getId = () => `dndnode_${id++}`;

export function Page() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const runQuery = () => {
    const { graph, nodeDependencies } = constructGraphs(nodes, edges);
    const endingNodeIds = getEndingNodes(nodeDependencies, graph);

    const { graph: reversedGraph } = constructGraphs(nodes, edges, {
      isReversed: true,
    });

    runGraph(
      nodes,
      reversedGraph,
      endingNodeIds[0],
      (node, inputData) => {
        setNodes((nodes) => {
          const updatedNodeIndex = nodes.findIndex((nd) => nd.id === node.id);
          if (updatedNodeIndex !== -1) {
            const updatedNode = cloneDeep(nodes[updatedNodeIndex]);
            updatedNode.data.inputData = inputData;
            updatedNode.data.status = "pending";
            const newNodes = [...nodes];
            newNodes[updatedNodeIndex] = updatedNode;
            return newNodes;
          }
          return nodes;
        });
      },
      (node, outputData) => {
        setNodes((nodes) => {
          const updatedNodeIndex = nodes.findIndex((nd) => nd.id === node.id);
          if (updatedNodeIndex !== -1) {
            const updatedNode = cloneDeep(nodes[updatedNodeIndex]);
            updatedNode.data.result = outputData;
            updatedNode.data.status = "success";
            const newNodes = [...nodes];
            newNodes[updatedNodeIndex] = updatedNode;
            return newNodes;
          }
          return nodes;
        });
      },
      (node, error) => {
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
      }
    );

    if (!endingNodeIds.length) {
      throw Error("Ending nodes not found");
    }
  };

  const onDragOver = useCallback<DragEventHandler<HTMLDivElement>>((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: getDefaultNodeDataByType(type),
        // dragHandle: ".custom-drag-handle",
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="w-screen h-screen pt-7 flex relative">
      <Toolbar />
      <Sidebar />
      <div className="bg-stone-100 h-full flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onInit={setReactFlowInstance}
          edgesFocusable
          edgesUpdatable
          nodesFocusable
          onDragOver={onDragOver}
          onDrop={onDrop}
          fitView
          snapToGrid
        >
          <Background />
        </ReactFlow>
        <Button
          size="S"
          onClick={runQuery}
          className="absolute bottom-4 right-4"
        >
          Run Query
        </Button>
      </div>
    </div>
  );
}

function ResultNode({ data }: any) {
  const nodeId = useNodeId();

  const [resultType, setResultType] = useState<string | null>(null);

  const getNodes = useStore((store) => store.getNodes);

  const targetEdge = useStore((s) => s.edges.find((e) => e.target === nodeId));

  useEffect(() => {
    if (targetEdge) {
      const nodes = getNodes();
      const sourceNode = nodes.find((node) => node.id === targetEdge.source);
      if (sourceNode) {
        setResultType(sourceNode.data.outputType);
      }
    } else {
      setResultType(null);
    }
  }, [targetEdge]);

  return (
    <NodeWrapper status={data.status} title="Result">
      <div className="px-4 py-2 bg-stone-200 text-stone-800 w-full flex justify-center">
        Inputs
      </div>
      <div className="relative py-4">
        <Handle
          type="target"
          onConnect={console.log}
          className="flex"
          position={Position.Left}
        />
        <div className="ml-4">
          Result: {resultType ? resultType : "No Result Type"}
        </div>
        {resultType === "image" && data.result && (
          <>
            <div className="m-2 w-[420px] h-[300px] flex items-center justify-center aspect-video bg-stone-200">
              <img src={data.result} className="object-contain w-full h-full" />
            </div>
            <a
              href={data.result}
              className="ml-2 text-blue-400"
              target="_blank"
            >
              Download
            </a>
          </>
        )}
        {resultType === "image" && !data.result && (
          <div className="m-2 w-[420px] h-[300px] flex items-center justify-center aspect-video bg-stone-200" />
        )}
      </div>
    </NodeWrapper>
  );
}
