import React from "react";
import Layout from "@/components/layout";
import ForBusi from "@/components/forBusiness";
import { fetchForBusinessPage, fetchHomePage } from "../contentfulApi";
const Forbusiness = ({ busninessPage, homePage }) => {
  return (
    <Layout>
      <ForBusi busninessPage={busninessPage} homePage={homePage} />
    </Layout>
  );
};

export default Forbusiness;
export async function getStaticProps() {
  const busninessPage = await fetchForBusinessPage();
  const homePage = await fetchHomePage();

  return {
    props: {
      busninessPage,
      homePage,
    },
  };
}
