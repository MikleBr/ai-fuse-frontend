import { Chip } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";

type TopFiltersProps = {
  className?: string;
};

type Tag = {
  label: string;
  value: string;
};

const tags: Tag[] = [
  { label: "Design", value: "Design" },
  { label: "Маркетинг", value: "Marketing" },
  { label: "СММ", value: "SMM" },
  { label: "Разработка", value: "Develop" },
  { label: "Фото", value: "Photo" },
];

export function TopFilters({ className }: TopFiltersProps) {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleActive = (tagValue: string) => {
    setActiveTags((prevTags) => {
      if (prevTags.includes(tagValue)) {
        return prevTags.filter((activeTag) => activeTag !== tagValue);
      }

      return [...prevTags, tagValue];
    });
  };

  return (
    <div className={cn("flex gap-2", className)}>
      {tags.map((tag) => {
        const isActive = activeTags.includes(tag.value);
        return (
          <Chip
            className="cursor-pointer flex select-none gap-1 items-center"
            onClick={() => toggleActive(tag.value)}
            variant={isActive ? "primary" : "secondary"}
          >
            {tag.label}{" "}
            {isActive && (
              <button className="">
                <Cross2Icon />
              </button>
            )}
          </Chip>
        );
      })}
    </div>
  );
}
