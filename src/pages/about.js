import Layout from "@/components/layout";
import AboutPage from "@/components/about";
import { fetchAboutPage } from "../contentfulApi";
export default function About({ aboutPage }) {
  console.log("aboutPage", aboutPage);
  return (
    <Layout>
      <AboutPage aboutPage={aboutPage} />
    </Layout>
  );
}
export async function getStaticProps() {
  const aboutPage = await fetchAboutPage();
  return {
    props: {
      aboutPage,
    },
  };
}
