import React from "react";
import Layout from "@/components/layout";
import Forinvetors from "@/components/for-investors";
import { fetchForInvestorsProjects } from "../contentfulApi";
const Investors = ({ projectPage }) => {
  console.log("projectPage", projectPage);
  const { demoCard } = projectPage;
  return (
    <Layout>
      <Forinvetors demoCard={demoCard} />
    </Layout>
  );
};

export default Investors;
export async function getStaticProps() {
  const projectPage = await fetchForInvestorsProjects();

  return {
    props: {
      projectPage,
    },
  };
}
