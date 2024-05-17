import { Badge, Card, Typography } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { CardActions } from "../CardActions";
import { Tags } from "./Tags";
import { Model } from "@/shared/mocks/model";

type CardHeadProps = {
  className?: string;
  info: Model["info"];
};

export function CardHead({ className, info }: CardHeadProps) {
  const { logo, name, creator, professions, rating, tags, type } = info;

  const headParams = [
    { label: "Рейтинг", value: rating },
    { label: "Тип", value: type },
    { label: "Профессии", value: getProfessionsValue(professions || []) },
    { label: "Создатель", value: creator },
  ].filter(({ value }) => Boolean(value));

  return (
    <div className={cn("w-full flex gap-4", className)}>
      <Card className="w-20 h-20 lg:w-32 lg:h-32 shrink-0 overflow-hidden">
        <img className="w-full h-full object-cover" src={logo} alt={name} />
      </Card>
      <div className="flex grow flex-col">
        <div className="w-full h-20 flex justify-between">
          <div>
            <Tags tags={tags || []} maxTagsCount={3} />
            <div className="flex gap-2 items-end">
              <Typography.Heading className="m-0 lg:text-4xl lg:font-extrabold text-3xl font-semibold" Component="h1" level={1}>
                {name}
              </Typography.Heading>
            </div>
          </div>
          <CardActions className="hidden" />
        </div>
        <div className="flex ml-[-96px] xl:ml-0 mt-4 gap-4 xl:gap-10">
          {headParams.map(({ label, value }) => (
            <div key={label} className="flex flex-col">
              <div className="text-xs xl:text-sm text-muted-foreground">{label}</div>
              <div className="text-sm xl:text-base">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getProfessionsValue(professions: string[], maxLength = 2) {
  if (professions.length === 1) {
    return professions[0];
  }

  const restProfessionsCount = professions.length - maxLength;

  const result = professions.slice(0, maxLength).join(', ')

  if (restProfessionsCount > 0){
    return `${result} и еще ${restProfessionsCount}`
  }
  return result;
}
