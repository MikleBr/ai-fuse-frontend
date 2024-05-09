import { Button, Card, TextField } from "@/shared/components";
import { AuthLayout } from "@/widgets/auth-layout";
import Link from "next/link";

type PageProps = {};

export function Page({}: PageProps) {
  return (
    <AuthLayout className="flex">
      <div className="w-1/2 h-screen flex flex-col items-center justify-center">
        <Card className="w-full md:w-[480px]">
          <Card.Head>
            <Card.Title>Регистрация</Card.Title>
          </Card.Head>
          <Card.Content className="flex flex-col gap-4">
            <TextField label="Email" placeholder="Email" />
            <TextField label="Пароль" placeholder="Password" />
            <TextField
              label="Повторите пароль"
              placeholder="Повторите пароль"
            />

            <Button>Создать аккаунт</Button>
            <Link href="/auth/signin" className="text-sm underline">Уже зарегистрированы?</Link>
          </Card.Content>
        </Card>
      </div>
      <div className="w-1/2 h-screen bg-black"></div>
    </AuthLayout>
  );
}
