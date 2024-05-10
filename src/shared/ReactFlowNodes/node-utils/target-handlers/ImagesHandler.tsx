import { cn } from "@/shared/lib/utils";
import { useEffect, useId, useState } from "react";
import { Handle, Position, useStore } from "reactflow";
import { ImagesInput } from "../../types";

type ImageHandlerProps = {
  id?: string;
  input: ImagesInput;
};

export function ImagesHandler({ id, input }: ImageHandlerProps) {
  const generatedId = useId();

  const handlerId = id || generatedId;

  const [isConnected, setIsConnected] = useState(false);

  // const getNodes = useStore((store) => store.getNodes);

  const edge = useStore((state) =>
    state.edges.find((edg) => edg.targetHandle === handlerId)
  );

  useEffect(() => {
    if (edge) {
      setIsConnected(true);
      // const nodes = getNodes();
      // const sourceNode = nodes.find((node) => node.id === edge.source);
      // console.log("🚀 ~ useEffect ~ sourceNode:", sourceNode);
    } else {
      setIsConnected(false);
    }
  }, [edge]);

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
        {input.label}
        {!isConnected && (
          <label htmlFor={handlerId} className="bg-stone-200 rounded-md text-sm px-2 py-1">
            Выберите изображения{" "}
            <input id={handlerId} className="hidden" type="file" />
          </label>
        )}
      </div>
    </div>
  );
}
