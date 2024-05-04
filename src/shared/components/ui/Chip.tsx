import cn from "@/shared/utils/cn";

const Variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OUTLINE: "outline",
  ERROR: "error",
} as const;

const chipVariants = {
  [Variants.PRIMARY]: "border-transparent bg-primary text-primary-foreground shadow",
  [Variants.SECONDARY]:
    "border-transparent bg-secondary text-secondary-foreground ",
  [Variants.OUTLINE]: "text-foreground",
  [Variants.ERROR]:
    "border-transparent bg-destructive text-destructive-foreground text-white shadow",
};

const stylesBySize = {
  S: "px-2 py-0.5 text-sm",
  M: 'px-3 py-1',
  L: "px-4 py-1.5 text-lg",
};

type ChipProps = {
  size?: 'S' | 'M' | 'L'
  variant?: typeof Variants[keyof typeof Variants];
} & React.HTMLAttributes<HTMLDivElement>;

export function Chip({
  className,
  size = 'M',
  variant = 'primary',
  ...props
}: ChipProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        chipVariants[variant],
        stylesBySize[size],
        className,
      )}
      {...props}
    />
  );
}

Chip.Variants = Variants;
