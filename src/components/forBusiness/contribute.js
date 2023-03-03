import DemoCard from "@/utils/demoCard";
import HemergyConributeCard from "@/utils/HemergyContributeCard";

const Contribute = ({ busninessPage, demoCard, cards }) => {
  return (
    <div className="contribute-main pb-[494px]">
      <div className="contribute-section">
        <div className="flex text-center flex-col items-center mb-[64px]">
          <img
            src={busninessPage?.energyLogo.fields.file.url}
            alt="charger"
            className="w-12 sm:w-[96px] h-12 sm:h-[96px] mb-6 sm:mb-10"
          />
          <h2 className="text-[32px] md:text-5xl font-semibold leading-[48px] md:leading-[72px] text-textcolor mb-6">
            {busninessPage?.energyTitle.slice(0, 13)}
            <br />
            {busninessPage?.energyTitle.slice(13)}
          </h2>
          <p className=" max-w-[456px] text-[20px] md:p-md font-normal leading-[30px] md:leading-[36px] text-textcolor">
            {busninessPage?.energyText}
          </p>
        </div>
        <div className="contribute-cards">
          {cards?.map((item, index) => (
            <HemergyConributeCard
              key={index}
              icon={item.fields.logo[0].fields.file.url}
              title={item.fields.cardHeading}
              desc={item.fields.cardDescription}
            />
          ))}
        </div>
      </div>

      <div className="w-full absolute px-6 left-0 bottom-[-91px]">
        <DemoCard
          showIcon
          heading={demoCard[0]?.fields.boxHeading}
          desc={demoCard[0]?.fields.boxText}
          btnText={demoCard[0]?.fields.demoButton}
        />
      </div>

      <div className="wather-haf-white-bg" />
    </div>
  );
};

export default Contribute;
