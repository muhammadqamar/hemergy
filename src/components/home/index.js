import HeroBanner from "@/utils/heroBanner";
import Contribute from "./contribute";
import CalculatorSection from "./calculatorSection";
import PlanetToday from "./planetToday";

const Index = ({ homePage }) => {
  const { banner, partners, demoCard, ourContribute } = homePage;

  return (
    <div>
      <HeroBanner
        btnLInk="/register"
        home
        heroTitle={banner?.fields.mainHeading}
        subHeading={banner?.fields.subHeading}
        mainText={banner?.fields.mainText}
        btnText="Get started"
        weather
        bannerImg1={banner?.fields.bannerImage.fields?.file?.url}
      />
      <Contribute homePage={homePage} />
      <CalculatorSection homePage={homePage} />
      <PlanetToday partners={partners} demoCard={demoCard} />
    </div>
  );
};

export default Index;
