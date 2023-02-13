import React from 'react';
import DemoCard from '@/utils/demoCard';
import Slider from 'react-slick';
import ProjectCard from '../home/projectCard';
const PopularProject = () => {
  const settings = {
    arrows: false,
    dots: false,
    className: 'slider variable-width',
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className=" hiw-pp-section ">
      <div className="hiw-pp-div ">
        <DemoCard
          heading={'Start investing in the future of our planet today!'}
          desc={`No hidden fees, just transparent projects. Contribute to the energy revolution`}
          btnText={'Get started'}
        />
      </div>
      <div className="hiw-pp-header ">
        {/* Header */}
        <div className="hiw-pp-header-detail ">
          <h2 className="header-title ">Popular projects</h2>
          <p className="header-detail ">
            A selection of the types of projects you can <br /> get involved in
            today! See all
          </p>
        </div>
        {/* List */}

        <div className="hiw-pp-list ">
          <div className="hiw-pp-list-options ">
            <Slider {...settings}>
              {[1, 2, 3, 4, 5, 6, 7]?.map((team) => {
                return (
                  <div className="pb-[60px]">
                    <ProjectCard />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="hiw-wather-img" />
    </div>
  );
};

export default PopularProject;
