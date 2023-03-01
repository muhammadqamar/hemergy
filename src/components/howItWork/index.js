import Discoverd from "./Discoverd";
import FAQs from "./FAQs";
import HeroBanner from "@/utils/heroBanner";
import PopularProject from "./PopularProject";
import DemoCard from "@/utils/demoCard";

const Index = ({ faqPage, howItWorkPage }) => {
  return (
    <div>
      <HeroBanner
        howItWorkPage={howItWorkPage}
        pageName="How it works:"
        heroTitle2="For Contributors"
        btnLabel="Check it out"
        btnIcon="/images/w_expand_more.svg"
      />
      <Discoverd howItWorkPage={howItWorkPage} />
      <PopularProject howItWorkPage={howItWorkPage} />
      <div className="pt-0 px-6 z-[2] lg:px-0 lg:pt-[480px] w-full relative  mt-[-290px] lg:mt-0">
        <div className="mb-[160px] hidden lg:block">
          <DemoCard
            showIcon
            heading="Want to use our api?"
            desc="We provide a white label solution to businesses who want to develop and market their own financial products"
            btnText="Book a demo"
          />
        </div>
        <FAQs faqPage={faqPage} />
      </div>
    </div>
  );
};

export default Index;
