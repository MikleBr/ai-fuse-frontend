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
    <div className="rounded-xl gap-2 flex flex-col bg-gray-100 p-4 h-full">
      <div>Common Blocks</div>
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
      <div>AI Blocks</div>
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
    </div>
  );
}
