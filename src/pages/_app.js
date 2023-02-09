import { useRouter } from "next/router";
import Head from "next/head";
import { ToastContainer, toast } from 'react-toastify';
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { ethers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";
export default function App({ Component, pageProps }) {
  const routes = useRouter();
  function getLibrary(provider) {
    return new ethers.providers.Web3Provider(provider);
  }

  return (
    <>
      <Head>
        <title>Hemergy | {routes.asPath === "/" ? "Home" : routes.asPath}</title>
        <meta name="description" content="Hemergy  page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favi.svg" />
      </Head>

      <Web3ReactProvider getLibrary={getLibrary}>
      <ToastContainer />
      <Component {...pageProps} />
      </Web3ReactProvider>

    </>
  );
}
