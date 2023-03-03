import Discoverd from "./Discoverd";
import FAQs from "./FAQs";
import HeroBanner from "@/utils/heroBanner";
import PopularProject from "./PopularProject";
import DemoCard from "@/utils/demoCard";

const Index = ({ howItWorkPage }) => {
  const { banner, allFaqs, discover, demoCard } = howItWorkPage;
  return (
    <div>
      <HeroBanner
        pageName={banner.fields.mainText}
        heroTitle2={banner.fields.mainHeading}
        btnLabel={banner.fields.buttonLabel}
        btnIcon="/images/w_expand_more.svg"
      />
      <Discoverd discover={discover} />
      <PopularProject demoCard={demoCard} />
      <div className="pt-0 px-6 z-[2] lg:px-0 lg:pt-[480px] w-full relative  mt-[-290px] lg:mt-0">
        <div className="mb-[160px] hidden lg:block">
          <DemoCard
            showIcon
            heading={demoCard[1]?.fields.boxHeading}
            desc={demoCard[1]?.fields.boxText}
            btnText={demoCard[1]?.fields.demoButton}
          />
        </div>
        <FAQs allFaqs={allFaqs} />
      </div>
    </div>
  );
};

export default Index;
