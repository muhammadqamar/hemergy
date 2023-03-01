import AboutTeam from "./AboutTeam";
import HeroBanner from "@/utils/heroBanner";
import Impact from "./Impact";
import OurMission from "./OurMission";
const Index = ({ aboutPage }) => {
  return (
    <div>
      <HeroBanner
        aboutPage={aboutPage}
        heroTitle2="About Hemergy"
        btnLabel="All about us"
        btnIcon="/images/w_expand_more.svg"
      />
      <OurMission aboutPage={aboutPage} />
      <Impact aboutPage={aboutPage} />
      <AboutTeam />
    </div>
  );
};

export default Index;
