import { Button, TextField } from "@/shared/components";

type HeaderProps = {};

export function Header({}: HeaderProps) {
  return (
    <header className="w-full h-16 border-b border-b-muted">
      <div className="content-container flex justify-between h-full items-center">
        <nav className="flex items-center gap-6 h-full">
          <div className="cursor-pointer text-foreground transition-colors hover:text-foreground">
            Models
          </div>
          <div className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground">
            Playground
          </div>
          <div className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </div>
          <div className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground">
            About us
          </div>
        </nav>
        <div className="flex gap-4">
          <TextField placeholder="Search models..." />
          <Button variant="ghost">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
}
