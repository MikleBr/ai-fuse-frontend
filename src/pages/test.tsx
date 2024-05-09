import { TestNode } from "@/shared/ReactFlowNodes/TestNode";
import { CommonLayout } from "@/widgets/common-layout";
import ReactFlow, { Background, Edge, Node } from "reactflow";

const nodes: Node[] = [
  {
    id: "midjourney-node",
    data: {
      type: 'midjourney'
    },
    type: "custom",
    dragHandle: '.drag-trigger',
    draggable: true,
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "remove-bg-node",
    data: {
      type: 'remove-bg'
    },
    type: "custom",
    dragHandle: '.drag-trigger',
    draggable: true,
    position: {
      x: 400,
      y: 100,
    },
  },
];

const edges: Edge[] = [
  {
   id: '1-2',
   source: 'midjourney-node',
   target: 'remove-bg-node',
   animated: true
  },
];

const nodeTypes = {
  custom: TestNode,
};

export default function Page() {
  return (
    <CommonLayout>
      <div className="h-[600px]">
        <ReactFlow nodeTypes={nodeTypes} nodesDraggable className="bg-stone-200" nodes={nodes} edges={edges}>
          <Background color="#c3c3c3" size={2} />
        </ReactFlow>
      </div>
    </CommonLayout>
  );
}
