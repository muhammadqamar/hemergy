import Hero from "./hero";
import LocationCard from "@/utils/projectCard";
import DemoCard from "@/utils/demoCard";
import Link from "next/link";

const Index = ({ demoCard }) => {
  const user = {
    name: "John Wick",
    designation: "Project Manager",
    bio: "",
    avatar: "/images/user.png",
  };
  return (
    <div>
      <Hero />
      <div className="inestor-proj-main-section">
        <section className="w-full absolute left-0 top-[-393px] md:top-[-447px]">
          <div className="investor-project-cards desktop-card">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div className="w-full sm:w-auto" key={index}>
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
          <div className="investor-project-cards mobile-card">
            {[1, 2, 3, 4].map((item, index) => (
              <div className="w-full sm:w-auto" key={index}>
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
          <Link href="" className="mx-auto mt-10 btn secondary">
            Load more
          </Link>
        </section>
        <div className="white-wather-bg" />
      </div>
      <div className="w-full relative mt-[-137px] pb-[160px] hidden lg:block">
        <DemoCard
          heading={demoCard[0].fields.boxHeading}
          desc={demoCard[0].fields.boxText}
          btnText={demoCard[0].fields.demoButton}
        />
      </div>
    </div>
  );
};

export default Index;
