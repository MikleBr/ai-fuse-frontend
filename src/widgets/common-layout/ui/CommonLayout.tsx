import { TextField } from "@/shared/components";
import { Header } from "./Header";
import { Footer } from "./Footer";

type CommonLayoutProps = React.PropsWithChildren;

export function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
