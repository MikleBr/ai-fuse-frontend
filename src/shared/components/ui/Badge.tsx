import cn from "@/shared/utils/cn";

const Variants = {
  DEFAULT: "default",
  SECONDARY: "secondary",
  OUTLINE: "outline",
  ERROR: "error",
} as const;

const chipVariants = {
  default:
    "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
  secondary:
    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  error:
    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
  outline: "text-foreground",
};

type BadgeProps = {
  variant?: (typeof Variants)[keyof typeof Variants];
} & React.HTMLAttributes<HTMLDivElement>;

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring/10 focus:ring-offset-2",
        chipVariants[variant],
        className
      )}
      {...props}
    />
  );
}

Badge.Variants = Variants;
