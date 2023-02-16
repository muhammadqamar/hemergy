import Image from "next/image";
import Link from "next/link";
const HeroBanner = ({
  heroTitle,
  para1,
  para3,
  boldPara,
  para2,
  btnText,
  aniWind,
  bannerImg1,
  pageName,
  heroTitle2,
  btnLabel,
  btnIcon,
  paddingBottom,
}) => {
  return (
    <div className="hero-container ">
      <div
        className={`hero-wrapper pt-[208px] md:pt-[131px]  ${
          heroTitle2 && `justify-center text-center px-6 pt-[176px] pb-[379px]`
        }  ${paddingBottom && `pb-[220px]`}`}
      >
        <div className="hero-content mx-auto">
          {heroTitle && <h1 className="main-heading">{heroTitle}</h1>}
          {heroTitle2 && (
            <div className="mb-4 mx-auto max-w-[592px] ">
              {pageName && <h3 className="p-xl-semi font-medium text-white ">{pageName}</h3>}
              <h1 className="p-2xl  my-4">{heroTitle2}</h1>
              <span className="p-lg font-normal text-white opacity-80">{btnLabel}</span>
            </div>
          )}
          {para1 && (
            <h3 className="sub-heading ">
              {para1} <br />
              <strong> {boldPara}</strong> {para2}
            </h3>
          )}
          {para3 && (
            <h3 className="sub-heading about-w">
              {para3}
              {aniWind && (
                <span className="wind">
                  <Image src="/images/air.svg" width={32} height={32} alt="wind" /> Wind
                </span>
                /*<span className="sun">
                <Image src="/images/clear_day_w.svg" width={32} height={32} alt="wind" /> Sun
              </span>
              <span className="bio">
                <Image src="/images/humidity_low.svg" width={32} height={32} alt="wind" /> Biomass
              </span>*/
              )}
            </h3>
          )}
          <Link href="" className={`btn Primary ${btnIcon && `icon-btn`}`}>
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
