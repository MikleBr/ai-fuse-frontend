import { Button } from "../components";
import { MountTransition } from "../components/MountTransition";
import { cn } from "../lib/utils";
import { NodeData } from "./types";

type WaitingStatusProps = {
  status: NodeData["status"];
};

export function WaitingStatus({ status }: WaitingStatusProps) {
  const isPending = status === "pending";
  const isWaitForExecute = status === "waitForExecute";

  const shouldRender = isPending || isWaitForExecute;

  return (
    <MountTransition mount={shouldRender}>
      {({ entered, entering, exiting }) => (
        <div
          className={cn(
            "absolute text-white flex flex-col items-center justify-center left-0 top-0 z-10 w-full h-full rounded-xl backdrop-blur-sm bg-black/60",
            {
              "opacity-0": entering || exiting,
              "opacity-100": entered,
            }
          )}
        >
          {isWaitForExecute && "Ожидает выполнение других блоков"}
          {isPending && "Выполняется..."}
          <Button variant="destructive">Отменить</Button>
        </div>
      )}
    </MountTransition>
  );
}
