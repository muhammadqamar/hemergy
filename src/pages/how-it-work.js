import Layout from "@/components/layout";
import HowItWorkPage from "@/components/howItWork";
import { fetchfaqPage } from "../contentfulApi";
export default function HowItWork({ faqPage }) {
  console.log("faqPage", faqPage);
  return (
    <Layout>
      <HowItWorkPage faqPage={faqPage} />
    </Layout>
  );
}
export async function getStaticProps() {
  const faqPage = await fetchfaqPage();

  return {
    props: {
      faqPage,
    },
  };
}
