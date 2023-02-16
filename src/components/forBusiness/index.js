import HeroBanner from "@/utils/heroBanner";
import PartnersTab from "@/utils/parthersTabs";
import Contribute from "./contribute";

const Index = () => {
  return (
    <div>
      <HeroBanner
        heroTitle="Integrate with connected finance for sustainability"
        btnText="Book a demo"
        para1="Build your sustainable digital"
        boldPara="crowdfunding platform"
        para2="in days"
        para3="Reach your ESG goals by issuing and distributing connected financial products on-chain"
        bannerImg1="/images/business-banner.png"
        paddingBottom
      />
      <Contribute />

      <div className="calculator-main-section pt-[251px] pb-[374px] ">
        <h1 className="text-5xl font-semibold leading-[62px] text-textcolor text-center mb-20">
          Hear from our partners
        </h1>

        <PartnersTab />
        <div className="white-wather-bg" />
      </div>
    </div>
  );
};

export default Index;
