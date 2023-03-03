import HeroBanner from "@/utils/heroBanner";
import Contribute from "./contribute";
import CalculatorSection from "./calculatorSection";
import PlanetToday from "./planetToday";

const Index = ({ homePage }) => {
  return (
    <div>
      <HeroBanner
        btnLInk="/register"
        home
        heroTitle={homePage?.banner.fields.mainHeading}
        subHeading={homePage?.banner.fields.subHeading}
        mainText={homePage?.banner.fields.mainText}
        btnText="Get started"
        weather
        bannerImg1={homePage?.banner.fields.bannerImage.fields?.file?.url}
      />
      <Contribute homePage={homePage} />
      <CalculatorSection homePage={homePage} />
      <PlanetToday homePage={homePage} />
    </div>
  );
};

export default Index;
