import { cn } from "@/shared/lib/utils";
import { forwardRef, useId } from "react";

type InputProps = {
  required?: boolean;
  wrapperClassName?: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      required,
      className,
      label,
      error,
      errorMessage,
      wrapperClassName,
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
            {label}{" "}
            {required && <span className="text-sm text-destructive">*</span>}
          </label>
        )}
        <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/10 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive",
            className
          )}
          required={required}
          ref={ref}
          id={id || generatedId}
          {...props}
        />
        {errorMessage && (
          <div className="text-destructive mt-1 text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);
