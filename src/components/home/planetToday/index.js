import PartnersTab from "@/utils/parthersTabs";
import DemoCard from "@/utils/demoCard";

const Index = () => {
  return (
    <div className="planet-today-sectiion">
      <div className="w-full z-[1] left-0 absolute mt-[-140px]">
        <PartnersTab />
      </div>
      <div className=" w-full left-0 bottom-[-70px] absolute">
        <DemoCard
          showIcon
          heading="Want to use our api?"
          desc="We provide a white label solution to businesses who want to develop and market their own financial products"
          btnText="Book a demo"
        />
      </div>
      <div className="white-wather-bg" />
    </div>
  );
};

export default Index;
