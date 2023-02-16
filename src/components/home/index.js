import HeroBanner from "@/utils/heroBanner";
import Contribute from "./contribute";
import CalculatorSection from "./calculatorSection";
import PlanetToday from "./planetToday";

const Index = () => {
  return (
    <div>
      <HeroBanner
        heroTitle="Invest in the future of our planet"
        btnText="Get started"
        para1="Hemergy is a cutting-edge"
        boldPara="renewable energies"
        para2="investment platform"
        para3="See what you earn from"
        aniWind
        bannerImg1="/images/home-banner.png"
      />
      <Contribute />
      <CalculatorSection />
      <PlanetToday />
    </div>
  );
};

export default Index;
