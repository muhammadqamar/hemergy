import MainMap from "@/utils/map/mainMap";

const Hero = () => {
  return (
    <div className="hero-container ">
      <div className="hero-investors-wrapper max-w-[1440px] flex items-start  gap-16 md:gap-7 justify-center mx-auto pt-[192px] md:pt-[124px] px-[24px] flex-col lg:flex-row pb-[450px]">
        <MainMap mapHeading h />
      </div>
      <div className="wather-haf-white-bg" />
    </div>
  );
};

export default Hero;
