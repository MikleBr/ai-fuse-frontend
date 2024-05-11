import { TextField } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { useEffect, useId, useState } from "react";
import { Handle, Position, useNodeId, useStore } from "reactflow";
import { useSourceHandler } from "./useSourceHandler";

type TextHandlerProps = { id?: string; label: string };

export function TextHandler({ id, label }: TextHandlerProps) {
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
      <span>
      <span className="text-xs text-muted-foreground">(текст)</span> {label}
      </span>
    </div>
  );
}
