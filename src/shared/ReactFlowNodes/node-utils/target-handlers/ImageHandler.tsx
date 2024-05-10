import { cn } from "@/shared/lib/utils";
import { useId, useState } from "react";
import { Handle, Position } from "reactflow";
import { useTargetHandler } from "./useTargetHandler";

type ImageHandlerProps = {
  id?: string;
  label: string;
};

export function ImageHandler({ id, label }: ImageHandlerProps) {
  const generatedId = useId();

  const handlerId = id || generatedId;

  const { isConnected } = useTargetHandler(handlerId);

  return (
    <div className="relative w-full p-2 flex items-center">
      <Handle
        id={handlerId}
        type="target"
        className={cn(
          "!bg-primary !w-2.5 !h-2.5 !border-4 !border-transparent !-left-4 !top-1/2",
          {
            "!bg-primary": isConnected,
            "!bg-stone-600": !isConnected,
          }
        )}
        position={Position.Left}
      />
      <div className="flex flex-col">
        {label}
        {!isConnected && (
          <label htmlFor={handlerId} className="bg-stone-200 rounded-md px-2 text-sm py-1">
            Выберите изображение <input id={handlerId} className="hidden" type="file" />
          </label>
        )}
      </div>
    </div>
  );
}
