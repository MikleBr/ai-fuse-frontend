import { Badge, Button, Card } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { ArrowLeft } from "lucide-react";
import { DragEvent, useState } from "react";

const availableBlocks: { name: string; title: string; disabled?: boolean }[] = [
  {
    name: 'a',
    title: '1 text - 1 text'
  },
  {
    name: 'b',
    title: '2 text - 1 text'
  },
  {
    name: 'c',
    title: '1 text - 2 text'
  },
  {
    name: 'd',
    title: '2 text - 2 text'
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
    <div
      className={cn(
        "gap-2 relative p-4 overflow-hidden transition-all w-[290px] shrink-0 !rounded-none border-none flex flex-col bg-gray-100",
        collapsed && "w-12 py-4 px-1",
        className
      )}
    >
      <div className="flex justify-end">
        <Button
          variant="dark"
          size="icon"
          className={cn("", collapsed && "right-1")}
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <ArrowLeft className={cn(collapsed && "rotate-180")} />
        </Button>
      </div>
      {!collapsed && (
        <div className="min-w-[258px]">
          <div className="flex flex-col gap-2">
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
          </div>
        </div>
      )}
    </div>
  );
}
