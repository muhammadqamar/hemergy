import HeroBanner from "@/utils/heroBanner";
import PartnersTab from "@/utils/parthersTabs";
import Contribute from "./contribute";

const Index = ({ homePage, busninessPage }) => {
  return (
    <div>
      <HeroBanner
        forBusiness
        heroTitle={busninessPage?.banner.fields.mainHeading}
        subHeading={busninessPage?.banner.fields.subHeading}
        mainText={busninessPage?.banner.fields.mainText}
        btnText="Book a demo"
        bannerImg1={busninessPage?.banner.fields.bannerImage.fields?.file?.url}
        paddingBottom
      />

      <Contribute />

      <div className="calculator-main-section pt-[180px] md:pt-[251px] pb-0 md:pb-[170px] lg:pb-[220px] ">
        <h1 className="text-[32px] md:text-5xl font-semibold leading-[48px] md:leading-[62px] text-textcolor text-center mb-6 md:mb-20">
          Hear from our partners
        </h1>
        <div className="relative">
          <PartnersTab homePage={homePage} />
        </div>
        <div className="white-wather-bg" />
      </div>
    </div>
  );
};

export default Index;
