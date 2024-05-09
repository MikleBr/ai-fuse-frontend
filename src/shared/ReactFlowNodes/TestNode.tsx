import { useEffect } from "react";
import { Handle, Position, useNodeId, useStore } from "reactflow";
import { Card } from "../components";
import { Delete, PaintbrushIcon } from "lucide-react";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { MidjourneyNodeContent } from "./MidjourneyNodeContent";

export function TestNode({ data }: any) {
  const nodeId = useNodeId();

  const getNodes = useStore((store) => store.getNodes);

  const targetEdge = useStore((s) => s.edges.find((e) => e.target === nodeId));

  useEffect(() => {
    if (targetEdge) {
      const nodes = getNodes();
      const sourceNode = nodes.find((node) => node.id === targetEdge.source);
    }
  }, [targetEdge]);

  return (
    <Card className="bg-white relative min-w-[320px]">
      <div className="drag-trigger absolute w-8 h-10 bg-primary top-16 -left-8 rounded-l-full flex items-center justify-center">
        <DragHandleDots2Icon width={20} height={20} />
      </div>
      {data.type === "midjourney" && <MidjourneyNodeContent />}
      {data.type === "remove-bg" && <RemoveBgNodeContent />}
    </Card>
  );
}

function RemoveBgNodeContent() {
  return (
    <>
      <div className="w-full rounded-t-xl h-10 bg-primary flex items-center font-medium text-lg px-4 text-primary-foreground">
        Remove Background
      </div>
      <Card className="my-4 mx-auto w-[200px] flex items-center justify-center bg-muted aspect-square">
        <Delete width={60} height={60} />
      </Card>
      <div className="px-4 py-2 bg-secondary text-secondary-foreground w-full flex justify-start">
        Входные данные
      </div>
      <div className="relative p-2">
        <Handle
          id="imageInput"
          type="target"
          onConnect={console.log}
          className="!bg-primary !-left-1.5 !w-2 !h-2 !border-primary"
          position={Position.Left}
        />
        <div>Изображение</div>
      </div>
      <div className="px-4 py-2 bg-secondary text-secondary-foreground w-full flex justify-end">
        Результат
      </div>
      <div className="relative p-2 flex justify-end">
        <Handle
          id="imageOutput"
          type="source"
          className="!bg-primary !-right-1.5 !w-2 !h-2 !border-primary"
          position={Position.Right}
        />
        <div>Изображение</div>
      </div>
    </>
  );
}
