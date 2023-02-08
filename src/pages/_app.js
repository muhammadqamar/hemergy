import { useRouter } from "next/router";
import Head from "next/head";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  const routes = useRouter();

  return (
    <>
      <Head>
        <title>Hemergy | {routes.asPath === "/" ? "Home" : routes.asPath}</title>
        <meta name="description" content="Hemergy  page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favi.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
