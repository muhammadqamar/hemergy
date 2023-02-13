import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const Discoverd = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrow: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    // h-auto
    <div className=" hiw-discoverd-section ">
      <div className=" hiw-discoverd-div ">
        {/* Start */}
        <section className="discover__slider mt-[76px] mb-40 relative">
          <Slider {...settings}>
            {[0, 1, 3, 4].map((items, index) => (
              <section className="discover__section">
                <div className="flex items-center justify-center">
                  <Image
                    className="object-contain"
                    width={520}
                    height={346}
                    src="/images/Home-1.png"
                  />
                  <div className="text-center w-[296px] ml-[106px]">
                    <h2 className="text-textcolor text-[32px] font-medium">
                      Discover
                    </h2>
                    <p className="text-xl text-textcolor">
                      Browse projects and profiles of project holders
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </Slider>
        </section>
        {/* End */}
        <div className="hiw-discoverd-transparent-div ">
          <Image src={'/images/hiden_img.svg'} width={136} height={136} />
          <h2 className="transparent-heading ">
            No hidden fees,
            <br />
            just transparent projects
          </h2>
          <p className=" transparent-detail ">
            Contribute to high transparency and <br /> low pollution future
          </p>
        </div>
      </div>
      <div className="about-impact-wather-bg" />
    </div>
  );
};

export default Discoverd;
