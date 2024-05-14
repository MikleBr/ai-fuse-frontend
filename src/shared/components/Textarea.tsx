import { forwardRef, useId } from "react";
import { cn } from "../lib/utils";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";

export type TextareaProps = TextareaAutosizeProps & {
  label?: string;
  wrapperClassName?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      wrapperClassName,
      className,
      label,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    return (
      <div className={cn("flex flex-col", wrapperClassName)}>
        {label && (
          <label
            htmlFor={id || generatedId}
            className="text-sm mb-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
            {required && " "}
            {required && <span className="text-sm text-destructive">*</span>}
          </label>
        )}
        <TextareaAutosize
          className={cn(
            "flex resize-none w-full transition-all rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
