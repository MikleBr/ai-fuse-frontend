import {
  Button,
  Card,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { NodeProps, useReactFlow, useStore } from "reactflow";
import { NodeData } from "../types";
import { Copy, Ellipsis, Settings, Trash, Trash2 } from "lucide-react";
import { useCallback } from "react";

type NodeWrapperProps = React.PropsWithChildren & NodeProps<NodeData>;

export function NodeWrapper({
  id,
  children,
  dragging,
  selected,
  data,
}: NodeWrapperProps) {
  const { meta, status } = data;
  const { title } = meta;

  const { setNodes, setEdges, getNode, addNodes } = useReactFlow();

  const onDuplicateNode = useCallback(() => {
    const node = getNode(id);
    if (!node) return;

    const position = {
      x: node.position.x + 50,
      y: node.position.y + 50,
    };

    addNodes({
      ...node,
      selected: false,
      dragging: false,
      // FIXME: Из-за этого только один дубликат можно создать
      id: `${node.id}-copy`,
      position,
    });
  }, [id, getNode, addNodes]);

  const onDeleteNode = useCallback(() => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id));
  }, [id, setNodes, setEdges]);

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border-4 border-stone-300 relative min-w-[350px] z-[2]",
        dragging && "shadow-xl",
        selected && "outline outline-primary",
        selected && status === "success" && "outline outline-green-300",
        selected && status === "error" && "outline outline-red-300",
        {
          "border-stone-300": status === "pending",
          "border-green-400": status === "success",
          "border-red-400": status === "error",
        }
      )}
    >
      <div
        className={cn(
          "w-full rounded-t-xl h-12 bg-primary flex items-center justify-between font-medium text-lg px-4 text-primary-foreground",
          {
            "bg-green-400": status === "success",
            "bg-red-400": status === "error",
          }
        )}
      >
        <div>{title}</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="hover:bg-accent/40 hover:text-accent-foreground"
            >
              <Ellipsis strokeWidth={1.25} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-40">
            <DropdownMenuItem className="flex justify-between">
              Параметры <Settings className="w-5" />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex justify-between"
              onClick={onDuplicateNode}
            >
              Дублировать <Copy className="w-5" />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={onDeleteNode}
              className="text-destructive !hover:text-destructive flex justify-between"
            >
              Удалить <Trash2 className="w-5" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {children}
    </div>
  );
}
