import { Button, TextField } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";

type HeaderProps = {};

const links = [
  {
    href: "/models",
    label: "Нейросети",
  },
  {
    href: "/playground",
    label: "Песочница",
  },
  {
    href: "/tariffs",
    label: "Тарифы",
  },
  {
    href: "/documentation",
    label: "Документация",
  },
];

const user = {
  email: "misha-bebra@gmail.com",
  role: "USER",
  name: "Mikhail Barulin",
};

export function Header({}: HeaderProps) {
  const router = useRouter();

  return (
    <header className="w-full hidden md:block h-16 border-b border-b-muted">
      <div className="content-container flex justify-between h-full items-center">
        <nav className="flex items-center gap-6 h-full">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "cursor-pointer text-muted-foreground transition-colors hover:text-foreground",
                router.asPath.includes(link.href) && "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-4 items-center">
          <TextField placeholder="Поиск нейросетей..." />
          {!user && (
            <Link href="/auth/signin">
              <Button variant="ghost">Войти</Button>
            </Link>
          )}
          <Link href="/profile" className="w-9 h-9 rounded-full text-white select-none bg-red-500 font-light border-2 border-primary flex items-center justify-center">
            MB
          </Link>
        </div>
      </div>
    </header>
  );
}
