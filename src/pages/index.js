import Head from "next/head";
import Layout from "@/components/layout";
import HomePage from "@/components/home";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hemergy | Home</title>
        <meta name="description" content="Hemergy home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </Layout>
  );
}
