import HeroBanner from "@/utils/heroBanner";
import Contribute from "./contribute";
import CalculatorSection from "./calculatorSection";
import PlanetToday from "./planetToday";

const Index = () => {
  return (
    <div>
      {/* <Hero /> */}
      <HeroBanner
        heroTitle="Swift set-up & ESG compliant"
        para1="Build your sustainable digital"
        boldPara="crowdfunding"
        para2="in days"
        para3="Reach your ESG goals by issuing and distributing connected financial products on-chain"
      />
      <Contribute />
      <CalculatorSection />
      <PlanetToday />
    </div>
  );
};

export default Index;
