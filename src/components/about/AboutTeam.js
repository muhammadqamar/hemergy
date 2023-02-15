import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TeamCard from './TeamCard';
import Slider from 'react-slick';
const data = [
  {
    title: 'Ahmed Belabdia',
    desg: 'Founder',
    detail: 'Former engineer at Natixis Payments',
    image: '/images/about_team_1.svg',
  },
  {
    title: 'Ahmed Belabdia',
    desg: 'Founder',
    detail:
      'It is a long established fact that a reader will be distracted by...',
    image: '/images/about_team (1).svg',
  },
  {
    title: 'Ahmed Belabdia',
    desg: 'Adviser',
    detail: 'Former engineer at Natixis Payments',
    image: '/images/about_team (2).svg',
  },
  {
    title: 'Ahmed Belabdia',
    desg: 'Adviser',
    detail: 'Former engineer at Natixis Payments',
    image: '/images/about_team (3).svg',
  },
];
const AboutTeam = () => {
  const settings = {
    // className: "center",
    // centerMode: true,
    // infinite: true,
    // centerPadding: "60px",
    // slidesToShow: 4,
    // speed: 500,
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
    <section className="about-team-section ">
      <div className="about-team-board ">
        <div className="api-card-box">
          <h1 className="api-heading">
            Start investing in the <br /> future of our planet today!
          </h1>
          <p className="api-about">
            No hidden fees, just transparent projects.
            <br /> Contribute to the energy revolution
          </p>

          <Link href="" className="btn Primary">
            Get started
          </Link>
        </div>
      </div>

      <div className="about-team-div ">
        <h3 className="about-team-title ">The team</h3>
        <div className="pb-[140px]">
          <Slider {...settings}>
            {data?.map((team) => {
              return (
                <div className="pb-[60px]">
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
