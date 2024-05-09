import { TestNode } from "@/shared/ReactFlowNodes/TestNode";
import { Button, Typography } from "@/shared/components";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Edge,
  Node,
} from "reactflow";

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

type FlowBlockProps = {};

export function FlowBlock({}: FlowBlockProps) {
  return (
    <section className="py-16 bg-white">
      <div className="content-container flex gap-4">
        <div className="w-2/5 flex flex-col">
          <Typography.Heading level={1} className="m-0">
            Объединяйте нейросети
            <br />с помощью блоков
          </Typography.Heading>
          <Typography.Paragraph className="my-5">
            Мы разработали целое нихуя. Создавайте, делитесь и&nbsp;используйте
            блоки внутри комьюнити.
          </Typography.Paragraph>
          <Button size="L" className="w-fit">
            Узнать больше
          </Button>
        </div>
        <div className="w-3/5">
          <ReactFlow
          fitView
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
            className="bg-stone-200 !h-[600px] rounded-xl"
          >
            <Background
              size={3}
            />
          </ReactFlow>
        </div>
      </div>
    </section>
  );
}
