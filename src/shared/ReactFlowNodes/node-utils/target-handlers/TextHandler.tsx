import { TextField } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { useEffect, useId, useState } from "react";
import { Handle, Position, useNodeId, useStore } from "reactflow";
import { useTargetHandler } from "./useTargetHandler";

type TextHandlerProps = {
  id?: string;
  label: string;
};

export function TextHandler({ id, label }: TextHandlerProps) {
  const generatedId = useId();

  const handlerId = id || generatedId;

  const { isConnected } = useTargetHandler(handlerId);

  return (
    <div className="relative w-full p-2 flex items-center">
      <Handle
        id={handlerId}
        type="target"
        className={cn("!w-2.5 !h-2.5 !border-transparent !-left-4 !top-1/2", {
          "!bg-primary": isConnected,
          "!bg-stone-600": !isConnected,
        })}
        position={Position.Left}
      />
      <div className="flex flex-col">
        {label}
        {!isConnected && <TextField placeholder={label} />}
      </div>
    </div>
  );
}
