import { Button, Card } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { ArrowLeft } from "lucide-react";
import { DragEvent, useState } from "react";

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

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Card
      className={cn(
        "gap-2 relative transition-all w-[320px] shrink-0 !rounded-none border-none flex flex-col bg-gray-100",
        collapsed && "w-12",
        className
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className={cn('absolute right-3 top-1', collapsed && 'right-1')}
        onClick={() => setCollapsed((prev) => !prev)}
      >
        <ArrowLeft className={cn(collapsed && 'rotate-180')} />
      </Button>
      {!collapsed && (
        <div className="min-w-[280px]">
          <Card.Head className="pb-1">
            <div>
              <Card.Title>Flow Blocks</Card.Title>
              <Card.Description>Common blocks for your flow</Card.Description>
            </div>
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
        </div>
      )}
    </Card>
  );
}
