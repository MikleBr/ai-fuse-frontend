import { CommonLayout } from "@/widgets/common-layout";
import ReactFlow, { Background, Edge, Node } from "reactflow";

const nodes: Node[] = [
  {
    id: "1",
    data: {
      test: 1,
    },
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "2",
    data: {
      test: 1,
    },
    position: {
      x: 0,
      y: 0,
    },
  },
];

const edges: Edge[] = [
  {
   id: '1-2',
   source: '1',
   target: '2',
   animated: true
  },
];

export default function Page() {
  return (
    <CommonLayout>
      <div className="h-[600px]">
        <ReactFlow className="bg-stone-200" nodes={nodes} edges={edges}>
          {/* <Background color="#c3c3c3" size={2} /> */}
        </ReactFlow>
      </div>
    </CommonLayout>
  );
}
