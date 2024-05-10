import { TestNode } from "@/shared/ReactFlowNodes/TestNode";
import { NodeData } from "@/shared/ReactFlowNodes/types";
import { Button, Typography } from "@/shared/components";
import ReactFlow, { Background, Edge, Node } from "reactflow";
import example from "/public/Pngmaker.png";
import { GraphContextProvider } from "@/shared/ReactFlowNodes/GraphContext";

const initialNodes: Node<NodeData>[] = [
  {
    id: "midjourney-node",
    selectable: false,
    data: {
      meta: {
        title: "Midjourney",
      },
      inputs: [
        {
          label: "Промпт",
          type: "text",
        },
      ],
      outputs: [
        {
          id: "midjourney-node-output-1",
          label: "Изображение",
          type: "image",
        },
      ],
      result: {
        type: "image",
        data: {
          image: example.src,
        },
      },
      params: [],
    },
    type: "custom",
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "remove-bg-node",
    selectable: false,
    data: {
      meta: {
        title: "Удалить фон",
      },
      inputs: [
        {
          id: "remove-bg-node-input",
          label: "Изображения",
          type: "image",
        },
      ],
      outputs: [
        {
          id: "remove-bg-node-output",
          label: "Изображение",
          type: "image",
        },
      ],
      result: {
        type: "image",
        data: {
          image: example.src,
        },
      },
      params: [],
    },
    type: "custom",
    position: {
      x: 450,
      y: 100,
    },
  },
];

const initialEdges: Edge[] = [
  // {
  //   id: "1",
  //   source: "midjourney-node",
  //   target: "combine-images",
  //   sourceHandle: "midjourney-node-output-1",
  //   targetHandle: "combine-images-input",
  // },
  // {
  //   id: "2",
  //   source: "midjourney-node",
  //   target: "combine-images",
  //   targetHandle: "combine-images-input",
  //   sourceHandle: "midjourney-node-output-2",
  // },
  // {
  //   id: "3",
  //   source: "midjourney-node",
  //   target: "combine-images",
  //   targetHandle: "combine-images-input",
  //   sourceHandle: "midjourney-node-output-3",
  // },
  // {
  //   id: "3",
  //   source: "midjourney-node",
  //   target: "combine-images",
  //   targetHandle: "combine-images-input",
  //   sourceHandle: "midjourney-node-output-3",
  // },
  {
    id: "4",
    source: "midjourney-node",
    target: "remove-bg-node",
    sourceHandle: "midjourney-node-output-1",
    targetHandle: "remove-bg-node-input",
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
          <GraphContextProvider runNode={() => {}}>
            <ReactFlow
              fitView
              nodes={initialNodes}
              edges={initialEdges}
              nodeTypes={nodeTypes}
              className="bg-muted !h-[600px] rounded-xl"
            >
              <Background size={3} />
            </ReactFlow>
          </GraphContextProvider>
        </div>
      </div>
    </section>
  );
}
