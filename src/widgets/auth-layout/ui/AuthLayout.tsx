import { cn } from "@/shared/lib/utils";

type CommonLayoutProps = React.PropsWithChildren<{ className?: string }>;

export function AuthLayout({ children, className }: CommonLayoutProps) {
  return (
    <main className={cn("w-full min-h-screen min-w-[320px]", className)}>
      {children}
    </main>
  );
}
