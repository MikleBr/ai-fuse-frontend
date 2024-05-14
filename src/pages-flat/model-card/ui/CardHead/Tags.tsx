import { Badge } from "@/shared/components";
import { getPluralForm } from "@/shared/lib/utils";

type TagsProps = { tags: string[]; maxTagsCount: number };

export function Tags({ tags, maxTagsCount }: TagsProps) {
  const hiddenTagsCount = tags.length - maxTagsCount;

  return (
    <div className="mb-2 flex gap-1">
      {tags.slice(0, maxTagsCount).map((tag, index) => (
        <Badge key={index} variant="secondary" className="text-xs py-0.5">
          {tag}
        </Badge>
      ))}
      {hiddenTagsCount > 0 && (
        <Badge variant="outline" className="text-xs py-0.5">
          + {hiddenTagsCount}{" "}
          {getPluralForm(hiddenTagsCount, {
            one: "тег",
            few: "тега",
            many: "тегов",
          })}
        </Badge>
      )}
    </div>
  );
}
