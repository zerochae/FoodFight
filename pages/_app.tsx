import type { AppProps } from "next/app";
import { Header, Footer } from "Components/Common/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default MyApp;
