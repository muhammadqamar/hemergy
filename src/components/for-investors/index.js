import Hero from "./hero";
import LocationCard from "@/utils/projectCard";
import DemoCard from "@/utils/demoCard";

const Index = () => {
  const user = {
    name: "John Wick",
    designation: "Project Manager",
    bio: "",
    avatar: "/images/user.png",
  };
  return (
    <div>
      <Hero />
      <div className="inestor-proj-main-section ">
        <section className="w-full absolute left-0 top-[-447px]">
          <div className="investor-project-cards">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div key={index}>
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
            ))}
          </div>
        </section>
        <div className="white-wather-bg" />
      </div>
      <div className="w-full relative mt-[-137px] pb-[160px]">
        <DemoCard
          heading="Host your own projects on our platform!"
          desc="We offer the ability for project holders to create projects on our platform and make use of our asset-backed securities API"
          btnText="Find out more"
        />
      </div>
    </div>
  );
};

export default Index;
