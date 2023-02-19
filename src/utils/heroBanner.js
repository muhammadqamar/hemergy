import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const HeroBanner = ({
  heroTitle,
  para1,
  para3,
  boldPara,
  para2,
  btnText,
  bannerImg1,
  pageName,
  heroTitle2,
  btnLabel,
  btnIcon,
  paddingBottom,
  home,
  weather,
}) => {
  const [activeHemergy, setActiveHemergy] = useState("sun");
  useEffect(() => {
    setTimeout(() => {
      if (activeHemergy === "sun") {
        setActiveHemergy("biomass");
      } else if (activeHemergy === "biomass") {
        setActiveHemergy("wind");
      } else {
        setActiveHemergy("sun");
      }
    }, [3000]);
  }, [activeHemergy]);
  return (
    <div className="hero-container ">
      <div
        className={`home-hero-wrapper pt-[208px] md:pt-[131px] pb-0 md:pb-[165px] ${
          heroTitle2 && `justify-center text-center px-6 pt-[176px] pb-[193px] md:pb-[379px]`
        }  ${paddingBottom && `pb-4 md:pb-[220px]`}`}
      >
        <div className={`hero-content ${heroTitle2 && `mx-auto`}`}>
          {home
            ? heroTitle && (
                <h1 className="main-heading">
                  {heroTitle.slice(0, 14)} <br /> {heroTitle.slice(14)}
                </h1>
              )
            : heroTitle && <h1 className="main-heading">{heroTitle}</h1>}
          {heroTitle2 && (
            <div className="mb-4 mx-auto max-w-[592px] ">
              {pageName && <h3 className="font-medium text-white p-xl-semi ">{pageName}</h3>}
              <h1 className="my-4 p-2xl">{heroTitle2}</h1>
              <span className="font-normal text-white p-lg opacity-80">{btnLabel}</span>
            </div>
          )}
          {para1 && (
            <h3 className="sub-heading ">
              {para1} <br />
              <strong> {boldPara}</strong> {para2}
            </h3>
          )}
          {para3 && (
            <h3 className="block sub-heading about-w sm:flex">
              {para3}
              {weather && (
                <div>
                  {activeHemergy == "wind" && (
                    <span className="wind ">
                      <Image src="/images/air.svg" width={32} height={32} alt="wind" /> Wind
                    </span>
                  )}
                  {activeHemergy == "sun" && (
                    <span className="sun">
                      <Image src="/images/clear_day_w.svg" width={32} height={32} alt="wind" /> Sun
                    </span>
                  )}
                  {activeHemergy == "biomass" && (
                    <span className="bio">
                      <Image src="/images/humidity_low.svg" width={32} height={32} alt="wind" />{" "}
                      Biomass
                    </span>
                  )}
                </div>
              )}
            </h3>
          )}
          <Link href="" className={`btn Primary w-max bg-btncolor ${btnIcon && `icon-btn`}`}>
            {btnText}
            {btnIcon && <Image src={btnIcon} alt="expand" width={24} height={24} />}
          </Link>
        </div>
        {bannerImg1 && <img src={bannerImg1} className="hero-banners" alt="banner" />}
        {/* <div className="hero-banner-img">
            {bannerStar && <img src={bannerStar} className="hero-start" alt="banner" />}
            <img src={bannerImg1} className="hero-wather" alt="banner" />
            <img src={bannerImg2} className="hero-user-card" alt="banner" />
        </div>*/}
      </div>
      <div className="white-wather-bg" />
    </div>
  );
};

export default HeroBanner;
