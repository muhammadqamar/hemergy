import HeroBanner from "@/utils/heroBanner";
import Contribute from "./contribute";
import CalculatorSection from "./calculatorSection";
import PlanetToday from "./planetToday";

const Index = ({ homePage }) => {
  return (
    <div>
      <HeroBanner
        homePage={homePage}
        btnLInk="/register"
        home
        heroTitle="Invest in the future of our planet"
        btnText="Get started"
        para1="Hemergy is a cutting-edge"
        boldPara="renewable energies"
        para2="investment platform"
        // para3="See what you earn from"
        weather
        bannerImg1="/images/home-banner.png"
      />
      <Contribute homePage={homePage} />
      <CalculatorSection homePage={homePage} />
      <PlanetToday homePage={homePage} />
    </div>
  );
};

export default Index;
