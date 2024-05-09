import {
  Button,
  Card,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Typography,
} from "@/shared/components";
import { Heart, Play } from "lucide-react";
import Link from "next/link";

type ModelCardProps = {};

export function ModelCard({}: ModelCardProps) {
  return (
    <Link href="/models/midjourney">
      <Card className="p-4 relative group">
        <div className="flex gap-3 items-center">
          <Card className="!rounded-md">
            <img
              className="w-16 h-16"
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/Midjourney_Emblem.svg"
            />
          </Card>
          <div className="flex flex-col">
            <Typography.Heading className="m-0" level={3}>
              Midjourney
            </Typography.Heading>
            <Typography.Caption className="text-muted-foreground">
              Текст в изображение
            </Typography.Caption>
          </div>
        </div>
        <div className="w-full flex gap-2 mt-4 ">
          <TooltipProvider>
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <Button className="flex-1" variant="secondary">
                  Подробнее
                </Button>
              </TooltipTrigger>
              <TooltipContent>Узнать о нейросети</TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <Button className="shrink-0" size="icon">
                  <Play />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Использовать</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button
          className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 hover:text-destructive"
          variant="ghost"
          size="icon"
        >
          <Heart />
        </Button>
      </Card>
    </Link>
  );
}
