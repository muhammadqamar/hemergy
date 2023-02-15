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
            heading="Start investing in the future of our planet today!"
            desc="No hidden fees, just transparent projects. Contribute to the energy revolution"
            btnText="Book a demo"
          />
        </div>
        <FAQs />
      </div>
    </div>
  );
};

export default Index;
