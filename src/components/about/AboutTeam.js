import DemoCard from "@/utils/demoCard";
import TeamCard from "./TeamCard";
import Slider from "react-slick";

const AboutTeam = ({ aboutPage }) => {
  const { demoCard, teamHeading, teamUser } = aboutPage;

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
          heading={demoCard[0].fields.boxHeading}
          desc={demoCard[0].fields.boxText}
          btnText={demoCard[0].fields.demoButton}
        />
      </div>

      <div className="about-team-div ">
        <h3 className="about-team-title ">{teamHeading}</h3>
        <div className="team-slider pb-0 md:pb-[140px]">
          <Slider {...settings}>
            {teamUser?.map((team, index) => {
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
