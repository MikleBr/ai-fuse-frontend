import { PaintbrushIcon } from "lucide-react";
import { Handle, Position } from "reactflow";
import { Card } from "../components";

type MidjourneyNodeContentProps = {};

export function MidjourneyNodeContent({}: MidjourneyNodeContentProps) {
  return (
    <>
      <div className="w-full rounded-t-xl h-10 bg-primary flex items-center font-medium text-lg px-4 text-primary-foreground">
        Midjourney
      </div>
      <Card className="my-4 mx-auto w-[200px] flex items-center justify-center bg-muted aspect-square">
        <PaintbrushIcon width={60} height={60} />
      </Card>
      <div className="px-4 py-2 bg-secondary text-secondary-foreground w-full flex justify-start">
        Входные данные
      </div>
      <div className="relative p-2">
        <Handle
          id="promptInput"
          type="target"
          onConnect={console.log}
          className="!bg-primary !-left-1.5 !w-2 !h-2 !border-primary"
          position={Position.Left}
        />
        <div>Промпт</div>
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
