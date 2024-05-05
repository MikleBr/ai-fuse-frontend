import { Button, TextField } from "@/shared/components";
import Link from "next/link";

type HeaderProps = {};

export function Header({}: HeaderProps) {
  return (
    <header className="w-full h-16 border-b border-b-muted">
      <div className="content-container flex justify-between h-full items-center">
        <nav className="flex items-center gap-6 h-full">
          <Link href="/models" className="cursor-pointer text-foreground transition-colors hover:text-foreground">
            Модели
          </Link>
          <Link
            href="/playground"
            className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
          >
            Песочница
          </Link>
          <div className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground">
            Тарифы
          </div>
          <div className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground">
            О нас
          </div>
        </nav>
        <div className="flex gap-4">
          <TextField placeholder="Поиск нейросетей..." />
          <Button variant="ghost">Войти</Button>
        </div>
      </div>
    </header>
  );
}
