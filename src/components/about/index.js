import AboutTeam from "./AboutTeam";
import HeroBanner from "@/utils/heroBanner";
import Impact from "./Impact";
import OurMission from "./OurMission";
const Index = () => {
  return (
    <div>
      <HeroBanner
        heroTitle2="About Hemergy"
        btnLabel="All about us"
        btnIcon="/images/w_expand_more.svg"
      />
      <OurMission />
      <Impact />
      <AboutTeam />
    </div>
  );
};

export default Index;
