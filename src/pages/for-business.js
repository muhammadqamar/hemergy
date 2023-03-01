import React from "react";
import Layout from "@/components/layout";
import ForBusi from "@/components/forBusiness";
import { fetchHomePage } from "../contentfulApi";
const Forbusiness = () => {
  return (
    <Layout>
      <ForBusi />
    </Layout>
  );
};

export default Forbusiness;
export async function getStaticProps() {
  const homePage = await fetchHomePage();

  return {
    props: {
      homePage,
    },
  };
}
