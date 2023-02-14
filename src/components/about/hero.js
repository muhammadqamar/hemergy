import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <div className="hero-container-about">
      <div className="hero-wrapper-about">
        <div className="">
          <h1 className="p-2xl  ">
            About
            <br /> Hemergy
          </h1>
          <p className="about-hero-prep">All about us</p>
          <div className="about-hero-us">
            <div className="hero-us-img">
              <Image src="/images/map/expand_more.svg" width={24} height={24} alt="show more" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wather-img" />
    </div>
  );
};

export default Hero;
