import "@/styles/globals.css";
import "reactflow/dist/style.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-purple/theme.css";

import type { AppProps } from "next/app";
import { PrimeReactProvider, APIOptions } from "primereact/api";

const value: Partial<APIOptions> = {
  ripple: true,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider value={value}>
      <Component {...pageProps} />
    </PrimeReactProvider>
  );
}
