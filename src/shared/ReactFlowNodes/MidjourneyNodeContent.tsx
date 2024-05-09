import { PaintbrushIcon } from "lucide-react";
import { Handle, Position } from "reactflow";
import { Card, TextField } from "../components";
import { useState } from "react";
import { Toggle } from "../components/Toggle";
import { cn } from "../lib/utils";

type MidjourneyNodeContentProps = {};

export function MidjourneyNodeContent({}: MidjourneyNodeContentProps) {
  const [imagesCount, setImagesCount] = useState(4);
  return (
    <>
      <div className="w-full rounded-t-xl h-10 bg-primary flex items-center font-medium text-lg px-4 text-primary-foreground">
        Midjourney
      </div>
      <Card
        className={cn("my-4 mx-auto overflow-hidden w-[200px] grid bg-muted aspect-square", {
          "grid-cols-1": imagesCount === 1,
          "grid-cols-2": [2, 4].includes(imagesCount),
        })}
      >
        {[...new Array(imagesCount)].map((_, index) => {
          return (
            <div key={index} className="flex items-center justify-center border border-muted-foreground">
              <PaintbrushIcon width={60} height={60} />
            </div>
          );
        })}
      </Card>
      <div className="px-4 py-2 bg-secondary text-secondary-foreground w-full flex justify-start">
        Входные данные
      </div>
      <div className="relative p-2">
        <Handle
          id="promptInput"
          type="target"
          onConnect={console.log}
          className="!bg-primary !-left-1.5 !top-11 !w-2 !h-2 !border-primary"
          position={Position.Left}
        />
        <TextField placeholder="Промпт" label="Промпт" />
        <div className="mt-3">
          <label className="text-sm mb-1 flex items-center gap-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Количество изображений
          </label>
          <div className="flex gap-2">
            <Toggle
              pressed={imagesCount === 1}
              onPressedChange={() => setImagesCount(1)}
              variant="outline"
            >
              1
            </Toggle>
            <Toggle
              pressed={imagesCount === 2}
              onPressedChange={() => setImagesCount(2)}
              variant="outline"
            >
              2
            </Toggle>
            <Toggle
              pressed={imagesCount === 4}
              onPressedChange={() => setImagesCount(4)}
              variant="outline"
            >
              4
            </Toggle>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 bg-secondary text-secondary-foreground w-full flex justify-end">
        Результат
      </div>
      <div className="flex flex-col">
        {[...new Array(imagesCount)].map((_, index) => {
          return (
            <div key={index} className="relative flex p-2 justify-end">
              <Handle
                id={`imageOutput_${index}`}
                type="source"
                className="!bg-primary !-right-1.5 !w-2 !h-2 !border-primary"
                position={Position.Right}
              />
              <div>Изображение {index + 1}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
