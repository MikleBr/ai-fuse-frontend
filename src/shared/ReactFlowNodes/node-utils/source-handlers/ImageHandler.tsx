import { useId } from "react";
import { Handle, Position } from "reactflow";
import { useSourceHandler } from "./useSourceHandler";
import { cn } from "@/shared/lib/utils";

type ImageHandlerProps = {
  id?: string;
  label: string;
};

export function ImageHandler({ id, label }: ImageHandlerProps) {
  const generatedId = useId();

  const handlerId = id || generatedId;

  const { isConnected } = useSourceHandler(handlerId);

  return (
    <div className="relative w-full p-2 flex items-center justify-end">
      <Handle
        id={handlerId}
        type="source"
        className={cn("!w-2.5 !h-2.5 !border-transparent !-right-4 !top-1/2", {
          "!bg-primary": isConnected,
          "!bg-stone-600": !isConnected,
        })}
        position={Position.Right}
      />
      {label}
    </div>
  );
}
