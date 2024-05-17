import { Badge, Card, Typography } from '@/shared/components';
import { cn } from '@/shared/lib/utils';
import { CardActions } from '../CardActions';
import { Tags } from './Tags';
import { Model } from '@/shared/mocks/model';

type CardHeadProps = {
  className?: string;
  info: Model['info'];
};

export function CardHead({ className, info }: CardHeadProps) {
  const { logo, name, creator, professions, rating, tags, type } = info;

  const headParams = [
    { label: 'Рейтинг', value: rating },
    { label: 'Тип', value: type },
    { label: 'Профессии', value: getProfessionsValue(professions || []) },
    { label: 'Создатель', value: creator },
  ].filter(({ value }) => Boolean(value));

  return (
    <div className={cn('flex w-full gap-4', className)}>
      <Card className="h-20 w-20 shrink-0 overflow-hidden lg:h-32 lg:w-32">
        <img className="h-full w-full object-cover" src={logo} alt={name} />
      </Card>
      <div className="flex grow flex-col">
        <div className="flex h-20 w-full justify-between">
          <div>
            <Tags tags={tags || []} maxTagsCount={3} />
            <div className="flex items-end gap-2">
              <Typography.Heading
                Component="h1"
                level={1}
                className="m-0 text-3xl font-semibold lg:text-4xl lg:font-extrabold"
              >
                {name}
              </Typography.Heading>
            </div>
          </div>
          <CardActions className="hidden" />
        </div>
        <div className="ml-[-96px] mt-4 flex gap-4 xl:ml-0 xl:gap-10">
          {headParams.map(({ label, value }) => (
            <div key={label} className="flex flex-col">
              <div className="text-xs text-muted-foreground xl:text-sm">
                {label}
              </div>
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

  const result = professions.slice(0, maxLength).join(', ');

  if (restProfessionsCount > 0) {
    return `${result} и еще ${restProfessionsCount}`;
  }
  return result;
}
