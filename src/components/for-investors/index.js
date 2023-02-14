import Hero from "./hero";
import LocationCard from "@/utils/projectCard";

const Index = () => {
  const user = {
    name: "John Wick",
    designation: "Project Manager",
    bio: "",
    avatar: "/images/user.png"
  }
  return (
    <div>
      <Hero />
      <div className="inestor-proj-main-section">
        <div className="investor-project-cards">
          <LocationCard
            hemergyIcon="/images/air.svg"
            bio="It is a long established fact that a reader will be distracted."
            user={user}
            viewDetailbtn
            trending
            stockdirection="up"
            stock="675.5"
            hemergyType="Solar asset name"
            name="Project Name"
          />
            <LocationCard
            hemergyIcon="/images/air.svg"
            bio="It is a long established fact that a reader will be distracted."
            user={user}
            viewDetailbtn
            trending
            stockdirection="up"
            stock="675.5"
            hemergyType="Solar asset name"
            name="Project Name"
          />
            <LocationCard
            hemergyIcon="/images/air.svg"
            bio="It is a long established fact that a reader will be distracted."
            user={user}
            viewDetailbtn
            trending
            stockdirection="up"
            stock="675.5"
            hemergyType="Solar asset name"
            name="Project Name"
          />
            <LocationCard
            hemergyIcon="/images/air.svg"
            bio="It is a long established fact that a reader will be distracted."
            user={user}
            viewDetailbtn
            trending
            stockdirection="up"
            stock="675.5"
            hemergyType="Solar asset name"
            name="Project Name"
          />
            <LocationCard
            hemergyIcon="/images/air.svg"
            bio="It is a long established fact that a reader will be distracted."
            user={user}
            viewDetailbtn
            trending
            stockdirection="up"
            stock="675.5"
            hemergyType="Solar asset name"
            name="Project Name"
          />
            <LocationCard
            hemergyIcon="/images/air.svg"
            bio="It is a long established fact that a reader will be distracted."
            user={user}
            viewDetailbtn
            trending
            stockdirection="up"
            stock="675.5"
            hemergyType="Solar asset name"
            name="Project Name"
          />

        </div>
        <div className="white-wather-bg" />
      </div>
    </div>
  );
};

export default Index;
