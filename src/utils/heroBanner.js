import React from "react";
import Link from "next/link";
const HeroBanner = ({ heroTitle, para1, para3, boldPara, para2 }) => {
  return (
    <div className="hero-container ">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="main-heading">{heroTitle}</h1>
          <h3 className="sub-heading ">
            {para1} <br />
            <strong> {boldPara}</strong> {para2}
          </h3>
          <h3 className="sub-heading about-w">{para3}</h3>

          <Link href="" className="btn Primary">
            Get started
          </Link>
        </div>

        <div className="hero-banner-img">
          {/* <img src="/images/hero-start.png" className="hero-start" alt="banner" /> */}
          <img src="/images/Layer_1.svg" className="hero-wather" alt="banner" />
          <img src="/images/hero-user-card.png" className="hero-user-card" alt="banner" />
        </div>
      </div>
      <div className="hero-wather-img" />
    </div>
  );
};

export default HeroBanner;
