import Discoverd from "./Discoverd";
import FAQs from "./FAQs";
import HeroBanner from "@/utils/heroBanner";
import PopularProject from "./PopularProject";
import DemoCard from "@/utils/demoCard";

const Index = () => {
  return (
    <div>
      <HeroBanner
        pageName="How it works:"
        heroTitle2="Invest in the future"
        btnLabel="Check it out"
        btnIcon="/images/w_expand_more.svg"
      />
      <Discoverd />
      <PopularProject />
      <div className="pt-[480px]">
        <div className="mb-[160px]">
          <DemoCard
            showIcon
            heading="Want to use our api?"
            desc="We provide a white label solution to businesses who want to develop and market their own financial products"
            btnText="Book a demo"
          />
        </div>
        <FAQs />
      </div>
    </div>
  );
};

export default Index;
