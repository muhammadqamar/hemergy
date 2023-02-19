import Link from "next/link";
import ProjectCard from "@/utils/projectCard";
import Slider from "react-slick";
import InvestmentCard from "./InvestmentCard";

const CalculatorSection = () => {
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
  const user = {
    name: "John Wick",
    designation: "Project Manager",
    bio: "",
    avatar: "/images/user.png",
  };

  return (
    <>
      <div className="calculator-main-section pt-[609px] px-0 md:px-[24px] pb-8 md:pb-[270px]">
        <div className="invest-calcu">
          <InvestmentCard />
        </div>
        {/** we works */}
        <div className="work-section">
          <h2 className="work-heading">We work with</h2>
          <div className="work-logos hidden lg:flex">
            <img src="/images/work_1.png" alt="logo" className="companys-logo" />
            <img src="/images/work_2.png" alt="logo" className="companys-logo" />
            <img src="/images/work_3.png" alt="logo" className="companys-logo" />
            <img src="/images/work_4.png" alt="logo" className="companys-logo" />
          </div>
          <div className="lg:hidden block">
            <Slider {...settings}>
              <div className="px-5">
                <img src="/images/work_1.png" alt="logo" className="companys-logo" />
              </div>
              <div className="px-5">
                <img src="/images/work_2.png" alt="logo" className="companys-logo" />
              </div>
              <div className="px-5">
                <img src="/images/work_3.png" alt="logo" className="companys-logo" />
              </div>
              <div className="px-5">
                <img src="/images/work_4.png" alt="logo" className="companys-logo" />
              </div>
            </Slider>
          </div>
        </div>
        <div className="white-wather-bg" />
      </div>
      <div>
        {/** projects */}
        <div className="popular-project-section pt-[98px] md:pt-0">
          <div className="popular-about">
            <h1 className="popular-heading">Popular projects</h1>
            <p className="popular-para">
              A selection of the types of projects you can get involved in today!{" "}
              <strong>
                <Link href="">See all</Link>
              </strong>
            </p>
          </div>
          <div className="popular-project-slider mb-[95px] md:mb-[104px]">
            <Slider {...settings}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((team) => {
                return (
                  <div className="px-[15px]">
                    <ProjectCard
                      shadow="mainshadow"
                      hemergyIcon="/images/air.svg"
                      bio="It is a long established fact that a reader will be distracted."
                      user={user}
                      viewDetailbtn
                      trending
                      stockdirection="up"
                      stock="675.5"
                      hemergyType="Solar asset name"
                      name="Project Name"
                      hideThumbnail
                      bg="bg-textcolor"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="planet-about">
            <h1 className="planet-heading">Start investing in the future of our planet today!</h1>
            <p className="planet-para">
              No hidden fees, just transparent projects. Contribute to the energy revolution
            </p>
            <Link href="" className="btn Primary">
              Get started
            </Link>
          </div>
          <div className="wather-haf-white-bg" />
        </div>
      </div>
    </>
  );
};

export default CalculatorSection;
