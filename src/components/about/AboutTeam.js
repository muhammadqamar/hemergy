import DemoCard from "@/utils/demoCard";
import TeamCard from "./TeamCard";
import Slider from "react-slick";
const data = [
  {
    title: "Ahmed Belabdia",
    desg: "Founder",
    detail: "Former engineer at Natixis Payments",
    image: "/images/about_team_1.svg",
  },
  {
    title: "Ahmed Belabdia",
    desg: "Founder",
    detail:
      "It is a long established fact that a reader will be distracted by...",
    image: "/images/about_team (1).svg",
  },
  {
    title: "Ahmed Belabdia",
    desg: "Adviser",
    detail: "Former engineer at Natixis Payments",
    image: "/images/about_team (2).svg",
  },
  {
    title: "Ahmed Belabdia",
    desg: "Adviser",
    detail: "Former engineer at Natixis Payments",
    image: "/images/about_team (3).svg",
  },
];
const AboutTeam = () => {
  const settings = {
    arrows: false,
    dots: false,
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <section className="about-team-section ">
      <div className="about-team-board ">
        <DemoCard
          heading="Start investing in the 
  future of our planet today!"
          desc="No hidden fees, just transparent projects.
  Contribute to the energy revolution"
          btnText="Get started"
        />
      </div>

      <div className="about-team-div ">
        <h3 className="about-team-title ">The team</h3>
        <div className="team-slider pb-0 md:pb-[140px]">
          <Slider {...settings}>
            {data?.map((team, index) => {
              return (
                <div key={index} className="pb-[60px]">
                  <TeamCard team={team} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="white-wather-bg" />
    </section>
  );
};

export default AboutTeam;
