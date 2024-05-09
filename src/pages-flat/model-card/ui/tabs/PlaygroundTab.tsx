import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  TextField,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components";
import { Toggle } from "@/shared/components/Toggle";
import { cn } from "@/shared/lib/utils";
import {
  ChevronDown,
  CircleHelp,
  Download,
  Loader2,
  Rocket,
  Share2,
} from "lucide-react";
import example from "/public/Pngmaker.png";

let timeoutId: NodeJS.Timeout | null = null;

export function PlaygroundTab() {
  const [status, setStatus] = useState<"init" | "loading" | "success">("init");
  const [input, setInput] = useState("");
  const onStart = () => {
    setStatus("loading");
    timeoutId = setTimeout(() => setStatus("success"), 5000);
  };

  const onAbort = () => {
    setStatus("init");
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return (
    <>
      <div className="grid pb-20 grid-cols-4 gap-4">
        <div className="col-span-2">
          <Card>
            <Card.Head className="flex flex-row justify-between items-center">
              <div>
                <Card.Title>Настройки</Card.Title>
                <Card.Description className="mt-1">
                  Базовые настройки для генерации
                </Card.Description>
              </div>
              <Button
                className="w-[180px]"
                onClick={status === "loading" ? onAbort : onStart}
                size="S"
                variant={status === "loading" ? "error" : "primary"}
              >
                {status !== "loading" ? (
                  <>
                    <Rocket
                      className="mr-1 h-4"
                      strokeWidth={1.5}
                      absoluteStrokeWidth
                    />
                    Сгенерировать!
                  </>
                ) : (
                  <>
                    Отменить
                    <Loader2 className="ml-1 animation-rotate" />
                  </>
                )}
              </Button>
            </Card.Head>
            <Card.Content className="flex flex-col gap-4">
              <TextField
                label="Промпт"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
                placeholder="Prompt"
              />
              <div>
                <label className="text-sm mb-1 flex items-center gap-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Количество изображений
                  <TooltipProvider>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger>
                        <CircleHelp className="w-3.5" />
                      </TooltipTrigger>
                      <TooltipContent className="p-2 max-w-[240px] text-sm">
                        <img
                          className="mb-1 w-full aspect-square rounded-md"
                          src="https://interactiveimmersive.io/wp-content/uploads/2022/11/cjow_portrait_of_a_warrior_women_with_feathers_in_her_hair_d2c69ea7-3f50-42e7-8b43-c0ce2868e539.png"
                        />
                        Вы можете сгенерировать до 4&nbsp;изображений за раз
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </label>
                <div className="flex gap-2">
                  <Toggle pressed variant="outline">
                    1
                  </Toggle>
                  <Toggle variant="outline">2</Toggle>
                  <Toggle variant="outline">4</Toggle>
                </div>
              </div>
              <div>
                <label className="text-sm block mb-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Формат
                </label>
                <div className="flex gap-2">
                  <Toggle variant="outline">PNG</Toggle>
                  <Toggle variant="outline" pressed>
                    JPG
                  </Toggle>
                  <Toggle variant="outline">WEBP</Toggle>
                </div>
              </div>
            </Card.Content>
          </Card>
          <Card className="mt-4">
            <Card.Head className="flex flex-row items-start justify-between">
              <div>
                <Card.Title>Дополнительные настройки</Card.Title>
                <Card.Description className="mt-1">
                  Для продвинутых пользователей
                </Card.Description>
              </div>
              <Button size="icon" variant="ghost" className="!m-0">
                <ChevronDown />
              </Button>
            </Card.Head>
            {
              <Card.Content className="flex flex-col gap-4">
                <TextField label="Seed" placeholder="Seed" />
                <TextField
                  label="Temperature"
                  placeholder="Temperature"
                  value="0.5"
                />
              </Card.Content>
            }
          </Card>
        </div>
        <div className="sticky top-4 self-start col-span-2">
          <div
            className={
              "overflow-hidden transition-all w-full rounded-lg relative"
            }
          >
            <img
              className={cn(
                "w-full checkerboard-bg",
                status === "loading" && "blur-sm brightness-75"
              )}
              src={example.src}
            />
            <Badge className="absolute top-2 right-2">Результат</Badge>
            {status === "loading" && (
              <Loader2
                strokeWidth={2}
                className="absolute top-[calc(50%-27px)] left-[calc(50%-27px)] w-14 h-14 text-white animation-rotate"
              />
            )}
          </div>
          <div className="mt-2 flex gap-2">
            <Button>
              Скачать изображение <Download className="ml-1 inline w-4" />
            </Button>
            <Button variant="secondary">
              Поделиться <Share2 className="ml-1 inline w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
