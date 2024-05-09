import * as React from "react";
import { cn } from "@/shared/lib/utils";

const stylesByVariants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    dark: "bg-dark text-dark-foreground hover:bg-dark/90",
    error:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
};

const stylesBySize = {
  S: "h-9 rounded-md px-3",
  M: 'h-10 px-4 py-2',
  L: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

type ButtonProps = {
    variant?: 'primary' | 'error' | 'outline' | 'secondary' | 'ghost' | 'link' | 'dark',
    size?: 'S' | 'M' | 'L' | 'icon'
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'M', ...props }, ref) => {
    // TOOD: Возможность Link
    return (
      <button
        className={cn(
          "inline-flex active:scale-95 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          stylesByVariants[variant],
          stylesBySize[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
