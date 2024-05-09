import { Header } from "./Header";
import { Footer } from "./Footer";
import { cn } from "@/shared/lib/utils";

type CommonLayoutProps = React.PropsWithChildren<{ wrapperClassName?: string, withBanner?: boolean }>;

export function CommonLayout({
  children,
  wrapperClassName,
  withBanner = false,
}: CommonLayoutProps) {
  return (
    <main className="min-h-screen min-w-[320px] flex flex-col">
      <Header />
      <div className={cn('content-container grid grid-cols-4 gap-10', wrapperClassName)}>
        <div
          className={cn(
            withBanner && "col-span-3",
            !withBanner && "col-span-4"
          )}
        >
          {children}
        </div>
        {withBanner && (
          <aside className="col-span-1">
            <div className="w-full p-4 mt-[60px] text-secondary-foreground rounded-lg bg-secondary h-[420px]">
              Баннер со всяким говном для гоев. Для неавторизованных будет наша
              реклама, а для авторизованных ссылки на другие модели или реклама
              всяких нейронок
              <br />
              <br />В любом случае это говно нужно чтобы простаранство заполнить
              и не срать в штаны
            </div>
          </aside>
        )}
      </div>
      <Footer />
    </main>
  );
}
