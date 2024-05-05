import { Card } from "@/shared/components";
import { DragEvent } from "react";

const commonBlocks: { type: string; title: string }[] = [
  {
    title: "Text",
    type: "text",
  },
  {
    title: "Image",
    type: "image",
  },
  {
    title: "Result",
    type: "result",
  },
];

const availableBlocks: { type: string; title: string; cost: number }[] = [
  {
    title: "Chat GPT",
    cost: 1,
    type: "chatGPT",
  },
  {
    title: "Generate Image",
    cost: 10,
    type: "generateImage",
  },
  {
    title: "fofr/become-image",
    cost: 5,
    type: "becomeImage",
  },
  {
    title: "fofr/face-to-sticker",
    cost: 5,
    type: "faceToSticker",
  },
  {
    title: "Remove Background",
    cost: 5,
    type: "removeBG",
  },
];

export function Sidebar() {
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Card className="rounded-xl gap-2 flex flex-col bg-gray-100 h-full">
      <Card.Head className="pb-1">
        <Card.Title>Flow Blocks</Card.Title>
        <Card.Description>Common blocks for your flow</Card.Description>
      </Card.Head>
      <Card.Content className="pb-0 flex flex-col gap-2">
        {commonBlocks.map((block, index) => (
          <div
            draggable
            onDragStart={(event) => onDragStart(event, block.type)}
            className="bg-white border border-stone-200 after:cursor-grabbing cursor-grab rounded-md w-full p-2 flex justify-between"
            key={index}
          >
            <p>{block.title}</p>
          </div>
        ))}
      </Card.Content>
      <Card.Head className="pb-1">
        <Card.Title>AI Blocks</Card.Title>
        <Card.Description>Main AI blocks</Card.Description>
      </Card.Head>
      <Card.Content className="flex flex-col gap-2">
        {availableBlocks.map((block, index) => (
          <div
            draggable
            onDragStart={(event) => onDragStart(event, block.type)}
            className="bg-white border border-stone-200 after:cursor-grabbing cursor-grab rounded-md w-full p-2 flex justify-between"
            key={index}
          >
            <p>{block.title}</p>
          </div>
        ))}
      </Card.Content>
    </Card>
  );
}
