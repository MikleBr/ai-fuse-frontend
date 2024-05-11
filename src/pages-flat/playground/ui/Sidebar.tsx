import { Badge, Button, Card } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { ArrowLeft } from "lucide-react";
import { DragEvent, useState } from "react";

const availableBlocks: { name: string; title: string; disabled?: boolean }[] = [
  {
    name: 'midjourney-prompt-gen',
    title: 'Генератор промптов для Midjourney'
  },
  {
    title: "Midjourney",
    name: "midjourney",
  },
  {
    title: "Удалить фон",
    name: "remove-bg",
  },
  {
    title: "Объединить изображения",
    name: "combine-images",
  },
  {
    title: "Chat GPT",
    name: "chatGPT",
    disabled: true,
  },
  {
    title: "Ракетами по хохлам",
    name: "chatGPT",
    disabled: true,
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
        className={cn("absolute right-3 top-1", collapsed && "right-1")}
        onClick={() => setCollapsed((prev) => !prev)}
      >
        <ArrowLeft className={cn(collapsed && "rotate-180")} />
      </Button>
      {!collapsed && (
        <div className="min-w-[280px]">
          <Card.Head className="pb-1">
            <Card.Title>AI Blocks</Card.Title>
            <Card.Description>Main AI blocks</Card.Description>
          </Card.Head>
          <Card.Content className="flex flex-col gap-2">
            {availableBlocks.map((block, index) => (
              <div
                draggable={!block.disabled}
                onDragStart={(event) =>
                  !block.disabled && onDragStart(event, block.name)
                }
                className={cn(
                  "bg-white border border-stone-200 rounded-md w-full p-2 flex justify-between",
                  !block.disabled && "after:cursor-grabbing cursor-grab",
                  block.disabled && "bg-muted text-muted-foreground"
                )}
                key={index}
              >
                <p>{block.title}</p>
                {block.disabled && <Badge>Premium</Badge>}
              </div>
            ))}
          </Card.Content>
        </div>
      )}
    </Card>
  );
}
