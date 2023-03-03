import PartnersTab from "@/utils/parthersTabs";
import DemoCard from "@/utils/demoCard";

const Index = ({ partners, demoCard }) => {
  return (
    <div className="planet-today-sectiion">
      <div className="w-full z-[1] left-0 relative md:absolute pt-[14px] md:pt-0 mt-0 md:mt-[-140px] ">
        <PartnersTab partners={partners} />
      </div>
      <div className=" w-full left-0 bottom-[-70px] absolute hidden md:block">
        <DemoCard
          showIcon
          heading={demoCard[1].fields.boxHeading}
          desc={demoCard[1].fields.boxText}
          btnText={demoCard[1].fields.demoButton}
        />
      </div>
      <div className="white-wather-bg" />
    </div>
  );
};

export default Index;
