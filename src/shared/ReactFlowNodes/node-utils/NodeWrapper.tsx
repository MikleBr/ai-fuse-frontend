import { Card } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { NodeProps } from "reactflow";
import { NodeData } from "../types";

type NodeWrapperProps = React.PropsWithChildren & NodeProps<NodeData>;

export function NodeWrapper({
  children,
  dragging,
  selected,
  data,
}: NodeWrapperProps) {
  const { meta, status } = data;
  const { title } = meta;

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border-4 border-stone-300 relative min-w-[320px] z-[2]",
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
          "w-full rounded-t-xl h-10 bg-primary flex items-center font-medium text-lg px-4 text-primary-foreground",
          {
            "bg-green-400": status === "success",
            "bg-red-400": status === "error",
          }
        )}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
