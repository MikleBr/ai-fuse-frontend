import { useEffect, useState } from "react";
import ReactFlow, {
  Background,
  Edge,
  Handle,
  Node,
  Position,
  useEdgesState,
  useNodeId,
  useNodesState,
  useStore,
} from "reactflow";

import { NodeWrapper } from "@/shared/ReactFlowNodes/NodeWrapper";
import { Button } from "@/shared/components";
import { Sidebar } from "./Sidebar";
import { Toolbar } from "./Toolbar";
import { TestNode } from "@/shared/ReactFlowNodes/TestNode";

const initialNodes: Node[] = [
  {
    id: "midjourney-node",
    data: {
      type: "midjourney",
    },
    type: "custom",
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "combine-images",
    data: {
      type: "combine-images",
    },
    type: "custom",
    position: {
      x: 400,
      y: 100,
    },
  },
  {
    id: "remove-bg-node",
    data: {
      type: "remove-bg",
    },
    type: "custom",
    position: {
      x: 800,
      y: 200,
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: "1",
    source: "midjourney-node",
    sourceHandle: "imageOutput_0",
    target: "combine-images",
    targetHandle: "imageInput",
    animated: true,
  },
  {
    id: "2",
    source: "midjourney-node",
    sourceHandle: "imageOutput_1",
    target: "combine-images",
    targetHandle: "imageInput",
    animated: true,
  },
  {
    id: "3",
    source: "combine-images",
    target: "remove-bg-node",
    animated: true,
  },
];

const nodeTypes = {
  custom: TestNode,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

export function Page() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
          nodeTypes={nodeTypes}
          maxZoom={1}
          edgesFocusable
          edgesUpdatable
          nodesFocusable
          fitView
          snapToGrid
        >
          <Background />
        </ReactFlow>
        <Button size="S" className="absolute bottom-4 right-4">
          Запустить блок
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
