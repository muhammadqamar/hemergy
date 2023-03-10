import React from "react";
import DemoCard from "@/utils/demoCard";
import Slider from "react-slick";
import ProjectCard from "@/utils/projectCard";
import Link from "next/link";
import Image from "next/image";
const PopularProject = ({ demoCard }) => {
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
    <div className=" hiw-pp-section ">
      <div className="hiw-pp-div">
        <DemoCard
          heading={demoCard[0]?.fields.boxHeading}
          desc={demoCard[0]?.fields.boxText}
          btnText={demoCard[0]?.fields.demoButton}
        />
      </div>
      <div className="hiw-pp-header ">
        {/* Header */}
        <div className="hiw-pp-header-detail ">
          <h2 className="header-title ">Popular projects</h2>
          <p className="header-detail ">
            A selection of the types of projects you can <br /> get involved in
            today!
            <Link href="/for-investors-projects">
              {" "}
              <strong className="popular_strong"> See all</strong>
            </Link>
          </p>
        </div>
        {/* List */}

        <div className="hiw-pp-list ">
          <div className="hiw-pp-list-options ">
            <Slider {...settings}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((team, i) => {
                return (
                  <div key={i} className="px-[12px]">
                    <ProjectCard
                      Shadow="37px 49px 0px rgba(0, 17, 141, 0.1)"
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
          <Link
            href=""
            className="btn fit-width gap-2 secondary btn-border hide"
          >
            All projects
            <Image
              src="/images/arrow_right.svg"
              alt="arrow_right"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
      <div className="white-wather-bg" />
    </div>
  );
};

export default PopularProject;
