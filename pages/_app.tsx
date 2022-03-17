import type { AppProps } from "next/app";
import { Header, Footer, Body } from "Components/Common/index";
import GlobalStyle from "Styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
