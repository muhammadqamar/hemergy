import React from "react";
import FAQsTab from "./FAQsTab";
const faqsData = [
  {
    title: "What is Hemergy?",
    description:
      "Hemergy is a technology provider empowering actors of the energy transition. We are not a crowdfunding platform or a fund but we provide connected finance software resources to actors and communities to enhance their own users’ experiences.",
  },
  {
    title: "Do I need to connect a crypto - wallet for my tokens?",
    description:
      "Hemergy is a technology provider empowering actors of the energy transition. We are not a crowdfunding platform or a fund but we provide connected finance software resources to actors and communities to enhance their own users’ experiences.",
  },
  {
    title: "Are my tokens the same as cryptocurrencies?",
    description:
      "Hemergy is a technology provider empowering actors of the energy transition. We are not a crowdfunding platform or a fund but we provide connected finance software resources to actors and communities to enhance their own users’ experiences.",
  },
  {
    title:
      "If I chose to create and connect my own crypto-wallet and I lost access to it, can Hemergy help me retrieve my tokens?",
    description:
      "Hemergy is a technology provider empowering actors of the energy transition. We are not a crowdfunding platform or a fund but we provide connected finance software resources to actors and communities to enhance their own users’ experiences.",
  },
  {
    title: "How can I get reimbursed if a project doesn’t start?",
    description:
      "Hemergy is a technology provider empowering actors of the energy transition. We are not a crowdfunding platform or a fund but we provide connected finance software resources to actors and communities to enhance their own users’ experiences.",
  },
];
const FAQs = () => {
  return (
    <div className="hiw-faqs-section ">
      <div className="hiw-faqs-div">
        <div className="hiw-faqs-detail ">
          <h2 className="hiw-faqs-heading ">FAQs</h2>
          <div className="hiw-faqs-list">
            {faqsData?.map((data, index) => {
              return <FAQsTab key={index} title={data.title} description={data.description} />;
            })}
          </div>
        </div>
      </div>
      {/* <div className="hiw-wather-img" /> */}
    </div>
  );
};

export default FAQs;
