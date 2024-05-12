import { memo, useState } from "react";
import { NodeProps, useStore } from "reactflow";
import { Button, TextField, Typography } from "../components";
import { Play, XIcon } from "lucide-react";
import { NodeWrapper } from "./node-utils/NodeWrapper";
import { NodeData } from "./types";
import { SourceHandler } from "./node-utils/source-handlers/Handler";
import { TargetHandler } from "./node-utils/target-handlers/Handler";
import { NodeCurtain } from "./NodeCurtain";
import { useGraphContext } from "./GraphContext";
import { NodeResult } from "./NodeResult";
import { cloneDeep } from "lodash";
import { WaitingStatus } from "./WaitingStatus";

function TestNodeComponent(props: NodeProps<NodeData>) {
  // Так нужно
  const { data, selected, id } = props;
  const { status } = data;
  console.log("🚀 ~ TestNodeComponent ~ status:", status)
  const { runNode } = useGraphContext();

  return (
    <NodeWrapper {...props}>
      {/* TODO: Подумать нужна ли отдельная ручка для переноса блока */}
      {/* <div className="drag-trigger absolute w-8 h-10 bg-primary top-16 -left-8 rounded-l-full flex items-center justify-center">
        <DragHandleDots2Icon width={20} height={20} />
      </div> */}
      <WaitingStatus status={status} />
      <NodeResult result={data.result} status={data.status} />
      {data.inputs.length > 0 && (
        <>
          <div className="px-4 py-2 bg-secondary text-secondary-foreground w-full flex justify-start">
            Входные данные
          </div>
          <div>
            {data.inputs.map((input, index) => (
              <TargetHandler key={String(index)} id={input.id} input={input} />
            ))}
          </div>
        </>
      )}
      {data.outputs.length > 0 && (
        <>
          <div className="px-4 py-2 bg-secondary text-secondary-foreground w-full flex justify-end">
            Результат
          </div>
          <div>
            {data.outputs.map((input, index) => (
              <SourceHandler key={String(index)} id={input.id} input={input} />
            ))}
          </div>
        </>
      )}
      <div className="px-2 pb-2 flex gap-2 items-center">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            runNode(id);
          }}
          size="icon"
        >
          <Play />
        </Button>
      </div>
      <NodeCurtain open={selected} className="flex flex-col justify-between">
        <div>
          <Typography.Heading level={4} className="m-2 block">
            {data.meta.title}
          </Typography.Heading>
          {data.params.length > 0 && (
            <div>
              <div className="mb-2 p-2  bg-stone-200">
                Дополнительные параметры
              </div>
              <div className="flex px-2 flex-col gap-3">
                {data.params.map((param, index) => {
                  if (param.type === "text") {
                    return (
                      <TextField
                        key={index}
                        label={param.label}
                        placeholder={param.label}
                      />
                    );
                  }
                })}
              </div>
            </div>
          )}
        </div>
        <div className="p-2 w-full">
          <Button className="w-full">Запустить блок отдельно</Button>
        </div>
      </NodeCurtain>
    </NodeWrapper>
  );
}

export const TestNode = memo(TestNodeComponent);
