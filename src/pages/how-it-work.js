import Layout from "@/components/layout";
import HowItWorkPage from "@/components/howItWork";
import { fetchHowItWorkPage } from "../contentfulApi";
export default function HowItWork({ howItWorkPage }) {
  console.log("howItWorkPage", howItWorkPage);
  return (
    <Layout>
      <HowItWorkPage howItWorkPage={howItWorkPage} />
    </Layout>
  );
}
export async function getStaticProps() {
  const howItWorkPage = await fetchHowItWorkPage();
  return {
    props: {
      howItWorkPage,
    },
  };
}
