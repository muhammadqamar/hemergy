import HeroBanner from "@/utils/heroBanner";
import PartnersTab from "@/utils/parthersTabs";
import Contribute from "./contribute";

const Index = ({ homePage, busninessPage }) => {
  const { banner, demoCard, cards } = busninessPage;
  const { partners } = homePage;
  return (
    <div>
      <HeroBanner
        forBusiness
        heroTitle={banner?.fields.mainHeading}
        subHeading={banner?.fields.subHeading}
        mainText={banner?.fields.mainText}
        btnText="Book a demo"
        bannerImg1={banner?.fields.bannerImage.fields?.file?.url}
        paddingBottom
      />

      <Contribute demoCard={demoCard} cards={cards} busninessPage={busninessPage} />

      <div className="calculator-main-section pt-[180px] md:pt-[251px] pb-0 md:pb-[170px] lg:pb-[220px] ">
        <h1 className="text-[32px] md:text-5xl font-semibold leading-[48px] md:leading-[62px] text-textcolor text-center mb-6 md:mb-20">
          Hear from our partners
        </h1>
        <div className="relative">
          <PartnersTab partners={partners} />
        </div>
        <div className="white-wather-bg" />
      </div>
    </div>
  );
};

export default Index;
