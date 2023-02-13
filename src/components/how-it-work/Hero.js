import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="hero-container-hiw">
      <div className="hero-wrapper-hiw">
        <div className="">
          <p className="font-medium text-[32px] leading-[38px] text-white">
            How it works
          </p>
          <h1 className="main-heading ">For Investors</h1>
          <p className="hiw-hero-prep">Check it out</p>
          <div className="hiw-hero-us">
            <div className="hero-us-img">
              <Image
                src="/images/map/expand_more.svg"
                width={24}
                height={24}
                alt="show more"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wather-img" />
    </div>
  );
};

export default Hero;
