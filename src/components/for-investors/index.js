import Hero from "./hero";
import LocationCard from "@/dashboard/common/locationCard";

const Index = () => {
  return (
    <div>
      <Hero />
      <div className="inestor-proj-main-section">
        <div className="investor-project-cards">
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
        </div>
        <div className="white-wather-bg" />
      </div>
    </div>
  );
};

export default Index;
