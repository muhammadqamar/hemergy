import HeroBanner from "@/utils/heroBanner";
import PartnersTab from "@/utils/parthersTabs";
import Contribute from "./contribute";

const Index = ({ homePage }) => {
  return (
    <div>
      <HeroBanner
        homePage={homePage}
        heroTitle="Integrate with connected finance for sustainability"
        btnText="Book a demo"
        para1="Build your sustainable digital"
        boldPara="crowdfunding platform"
        para2="in days"
        para3="Reach your ESG goals by issuing and distributing connected financial products on-chain"
        bannerImg1="/images/business-banner-img.png"
        paddingBottom
      />
      <Contribute />

      <div className="calculator-main-section pt-[180px] md:pt-[251px] pb-0 md:pb-[170px] lg:pb-[220px] ">
        <h1 className="text-[32px] md:text-5xl font-semibold leading-[48px] md:leading-[62px] text-textcolor text-center mb-6 md:mb-20">
          Hear from our partners
        </h1>
        <div className="relative">
          <PartnersTab />
        </div>
        <div className="white-wather-bg" />
      </div>
    </div>
  );
};

export default Index;
