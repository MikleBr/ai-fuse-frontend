import { Badge, Card, Typography } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { CardActions } from "../CardActions";
import { Tags } from "./Tags";

type CardHeadProps = {
  className?: string;
};

export function CardHead({ className }: CardHeadProps) {
  return (
    <div className={cn("w-full flex gap-4", className)}>
      <Card className="w-32 h-32">
        <img
          className="w-full h-full object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/2/24/Midjourney_Emblem.svg"
        />
      </Card>
      <div className="flex grow flex-col">
        <div className="w-full flex justify-between">
          <div>
           <Tags tags={['Изображения', 'Дизайн', 'Фото', 'Генерация', 'Беброчка']} maxTagsCount={3} />
            <div className="flex gap-2 items-end">
              <Typography.Heading className="m-0" Component="h1" level={1}>
                Midjourney
              </Typography.Heading>
            </div>
          </div>
          <CardActions />
        </div>
        <div className="flex mt-4 gap-10">
          <div className="flex flex-col">
            <div className="text-sm text-muted-foreground">Рейтинг</div>
            <div>4.87</div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm text-muted-foreground">Тип</div>
            <div>Текст в изображение</div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm text-muted-foreground">Professions</div>
            <div>Design, Photo, and 3 more</div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm text-muted-foreground">Developer</div>
            <div>Midjourney, Inc.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
