import { cn } from "@/shared/lib/utils";
import { ElementType, HTMLAttributes } from "react";

type CommonTypographyProps = {
  Component?: ElementType<any, keyof JSX.IntrinsicElements>;
} & React.PropsWithChildren &
  HTMLAttributes<HTMLSpanElement>;

const headingStylesByLevel = {
  1: "text-4xl mt-4 font-extrabold tracking-tight mb-2",
  2: "text-3xl mt-4 font-semibold tracking-tight mb-2",
  3: "text-2xl mt-4 font-semibold tracking-tight mb-2",
  4: "text-xl mt-4 font-semibold tracking-tight mb-2",
};

type HeadingProps = {
  level?: 1 | 2 | 3 | 4;
} & CommonTypographyProps;

function Heading({
  Component = "span",
  children,
  className,
  level = 1,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(headingStylesByLevel[level], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

const bodyStylesByLevel = {
  1: "leading-7 mb-2",
  2: "leading-5 mb-2",
};

type ParagraphProps = {
  variant?: 1 | 2;
} & CommonTypographyProps;

function Paragraph({
  Component = "span",
  variant = 1,
  children,
  className,
  ...props
}: ParagraphProps) {
  return (
    <Component {...props} className={cn(bodyStylesByLevel[variant], className)}>
      {children}
    </Component>
  );
}

function Caption({
  Component = "span",
  children,
  className,
  ...props
}: CommonTypographyProps) {
  return (
    <Component {...props} className={cn("text-xs leading-3", className)}>
      {children}
    </Component>
  );
}

function InlineCode({
  Component = "span",
  children,
  className,
  ...props
}: CommonTypographyProps) {
  return (
    <Component
      {...props}
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function Typography() {
  throw Error("Use Typography.[Heading | Paragraph | Caption]");
}

Typography.Heading = Heading;
Typography.Paragraph = Paragraph;
Typography.InlineCode = InlineCode;
Typography.Caption = Caption;
