import { Button, Card, TextField } from "@/shared/components";
import { AuthLayout } from "@/widgets/auth-layout";
import Link from "next/link";

type PageProps = {};

export function Page({}: PageProps) {
  return (
    <AuthLayout className="flex">
      <div className="w-1/2 h-screen bg-black"></div>
      <div className="w-1/2 h-screen flex flex-col items-center justify-center">
        <Card className="w-full md:w-[480px]">
          <Card.Head>
            <Card.Title>Вход</Card.Title>
          </Card.Head>
          <Card.Content className="flex flex-col gap-4">
            <TextField label="Email" placeholder="Email" />
            <div className="flex flex-col">
              <TextField
                type="password"
                label="Password"
                placeholder="Password"
              />
              <Link href="/auth/signup" className="text-sm underline self-end">
                Забыли пароль?
              </Link>
            </div>
            <Button>Войти</Button>
            <Link href="/auth/signup" className="text-sm underline">Создать аккаунт</Link>
          </Card.Content>
        </Card>
      </div>
    </AuthLayout>
  );
}
