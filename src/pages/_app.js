import Head from "next/head";
import { hotjar } from "react-hotjar";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import axios from "axios";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

//import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
//import { Web3Modal, useWeb3ModalTheme  } from '@web3modal/react'

import { useEffect, useState } from "react";
//import { configureChains, createClient, WagmiConfig } from 'wagmi'
//import { arbitrum, avalanche, mainnet, polygon } from 'wagmi/chains'

if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// 2. Configure wagmi client
//const chains = [mainnet, polygon, avalanche, arbitrum]

//const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors: modalConnectors({ version: '1', appName: 'web3Modal', chains, projectId }),
//   provider
// })

// 3. Configure modal ethereum client
//const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App({ Component, pageProps }) {
  const routes = useRouter();

  const [ready, setReady] = useState(false);
  const [checkSessionState, setcheckSessionState] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     console.log(routes)

  //     if (typeof window !== 'undefined') {
  //       const localToken = localStorage.getItem('hemergy-token')
  //       if (localToken) {
  //         try {
  //           await axios.get(
  //             `${process.env.NEXT_PUBLIC_API_DOMAIN}/auth/me`, {
  //             headers: {
  //               ['x-auth-token']: localToken,
  //             }
  //           })
  //           setcheckSessionState(false)
  //         } catch (e) {
  //           routes.push('/login')
  //           setcheckSessionState(false)
  //         }
  //       } else {
  //         routes.push('/login')
  //         setcheckSessionState(false)
  //       }
  //     }
  //   })()
  // }, [])

  useEffect(() => {
    setReady(true);
    hotjar.initialize(3369122, 6);
  }, []);

  return (
    <>
      <Head>
        <title>Hemergy | {routes.asPath === "/" ? "Home" : routes.asPath}</title>
        <meta name="description" content="Hemergy  page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favi.svg" />
      </Head>
      <ToastContainer />
      {ready ? (
        <Provider store={store}>
          {/* <WagmiConfig client={wagmiClient}> */}
          {checkSessionState && <Component {...pageProps} />}
          {/* </WagmiConfig> */}
        </Provider>
      ) : null}

      {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
    </>
  );
}
