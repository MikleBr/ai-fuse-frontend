import { TextField } from "@/shared/components";
import { Header } from "./Header";
import { Footer } from "./Footer";

type CommonLayoutProps = React.PropsWithChildren;

export function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <main className="content-container grid grid-cols-4 gap-10">
        <div className="col-span-3">{children}</div>
        <aside className="col-span-1">
          <div className="w-full p-4 mt-[60px] text-secondary-foreground rounded-lg bg-secondary h-[420px]">
            Баннер со всяким говном для гоев. Для неавторизованных будет наша
            реклама, а для авторизованных ссылки на другие модели или реклама
            всяких нейронок
            <br />
            <br />
            В любом случае это говно нужно чтобы простаранство заполнить и не срать в штаны
          </div>
        </aside>
      </main>
      <Footer />
    </main>
  );
}
