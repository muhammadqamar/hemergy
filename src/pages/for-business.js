import React from "react";
import Layout from "@/components/layout";
import ForBusi from "@/components/forBusiness";
import { fetchForBusinessPage } from "../contentfulApi";
const Forbusiness = ({ busninessPage }) => {
  return (
    <Layout>
      <ForBusi busninessPage={busninessPage} />
    </Layout>
  );
};

export default Forbusiness;
export async function getStaticProps() {
  const busninessPage = await fetchForBusinessPage();

  return {
    props: {
      busninessPage,
    },
  };
}
