import AboutTeam from "./AboutTeam";
import HeroBanner from "@/utils/heroBanner";
import Impact from "./Impact";
import OurMission from "./OurMission";
const Index = ({ aboutPage }) => {
  return (
    <div>
      <HeroBanner
        heroTitle2={aboutPage?.banner.fields.mainHeading}
        btnLabel={aboutPage?.banner.fields.buttonLabel}
        btnIcon="/images/w_expand_more.svg"
      />
      <OurMission aboutPage={aboutPage} />
      <Impact aboutPage={aboutPage} />
      <AboutTeam />
    </div>
  );
};

export default Index;
