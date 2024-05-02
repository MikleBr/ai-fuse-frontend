import cn from "@/shared/utils/cn";

const Variants = {
  DEFAULT: "default",
  SECONDARY: "secondary",
  OUTLINE: "outline",
  ERROR: "error",
} as const;

const chipVariants = {
  [Variants.DEFAULT]: "border-transparent bg-primary text-primary-foreground shadow",
  [Variants.SECONDARY]:
    "border-transparent bg-secondary text-secondary-foreground ",
  [Variants.OUTLINE]: "text-foreground",
  [Variants.ERROR]:
    "border-transparent bg-destructive text-destructive-foreground text-white shadow",
};

type ChipProps = {
  variant?: typeof Variants[keyof typeof Variants];
} & React.HTMLAttributes<HTMLDivElement>;

export function Chip({
  className,
  variant = 'default',
  ...props
}: ChipProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        chipVariants[variant],
        className,
      )}
      {...props}
    />
  );
}

Chip.Variants = Variants;
