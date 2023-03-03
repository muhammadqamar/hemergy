import AboutTeam from "./AboutTeam";
import HeroBanner from "@/utils/heroBanner";
import Impact from "./Impact";
import OurMission from "./OurMission";
const Index = ({ aboutPage }) => {
  const { banner, ourContribute } = aboutPage;
  return (
    <div>
      <HeroBanner
        heroTitle2={banner?.fields.mainHeading}
        btnLabel={banner?.fields.buttonLabel}
        btnIcon="/images/w_expand_more.svg"
      />
      <OurMission ourContribute={ourContribute} />
      <Impact aboutPage={aboutPage} />
      <AboutTeam aboutPage={aboutPage} />
    </div>
  );
};

export default Index;
