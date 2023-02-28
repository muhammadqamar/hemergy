import Layout from "@/components/layout";
import HowItWorkPage from "@/components/howItWork";
import { fetchfaqPage, fetchHowItWorkPage } from "../contentfulApi";
export default function HowItWork({ faqPage, howItWorkPage }) {
  console.log("faqPage", faqPage);
  console.log("howItWorkPage", howItWorkPage);
  return (
    <Layout>
      <HowItWorkPage faqPage={faqPage} howItWorkPage={howItWorkPage} />
    </Layout>
  );
}
export async function getStaticProps() {
  const faqPage = await fetchfaqPage();
  const howItWorkPage = await fetchHowItWorkPage();
  return {
    props: {
      faqPage,
      howItWorkPage,
    },
  };
}
