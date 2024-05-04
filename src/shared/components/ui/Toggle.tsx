"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import cn from "@/shared/utils/cn";

const stylesByVariants = {
  default: "bg-transparent",
  outline:
    "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
};

const stylesBySize = {
  S: "h-8 min-w-8 px-2",
  M: "h-9 min-w-9 px-3",
  L: "h-10 min-w-10 px-3",
};

type ToggleProps = {
  variant?: 'default' | 'outline',
  size?: 'S' | 'M' | 'L'
} & React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>

export function Toggle({ className, variant = 'default', size = 'M', ...props }: ToggleProps) {
  return (
    <TogglePrimitive.Root
      className={cn(
        "inline-flex w-fit items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        stylesByVariants[variant],
        stylesBySize[size]
      )}
      {...props}
    />
  );
}
