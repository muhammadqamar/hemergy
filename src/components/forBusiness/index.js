import HeroBanner from "@/utils/heroBanner";
import Contribute from "./contribute";
import DemoCard from "@/utils/demoCard";

const Index = () => {
  return (
    <div>
      <HeroBanner
        heroTitle="Swift set-up & ESG compliant"
        btnText="Book a demo"
        para1="Build your sustainable digital"
        boldPara="crowdfunding"
        para2="in days"
        para3="Reach your ESG goals by issuing and distributing connected financial products on-chain"
        bannerImg1="/images/Layer_1.svg"
        bannerImg2="/images/hero-user-card.png"
      />
      <Contribute />

      <div className="calculator-main-section">
        <DemoCard
          showIcon
          heading="Want to use our api?"
          desc="We provide a white label solution to businesses who want to develop and market their own financial products"
          btnText="Book a demo"
        />
      </div>
    </div>
  );
};

export default Index;
