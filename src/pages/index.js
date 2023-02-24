import Layout from "@/components/layout";
import HomePage from "@/components/home";
import { fetchHomePage } from "../contentfulApi";
export default function Home({ homePage }) {
  console.log("homePage", homePage);
  return (
    <Layout>
      <HomePage homePage={homePage} />
    </Layout>
  );
}
export async function getStaticProps() {
  const homePage = await fetchHomePage();

  return {
    props: {
      homePage,
    },
  };
}
