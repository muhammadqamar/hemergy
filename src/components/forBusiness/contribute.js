import DemoCard from "@/utils/demoCard";
import HemergyConributeCard from "@/utils/HemergyContributeCard";

const contribute = [
  {
    img: "/images/auto_fix.svg",
    heading: "Simple",
    para: "An end-to-end solution offering an API bridge: easily manage projects, assets, issuers and investors!",
  },
  {
    img: "/images/verified_user.svg",
    heading: "Certified",
    para: "Access to real renewable assets, proving revenue origin and ESG impact of your financial products.",
  },
  {
    img: "/images/thumb_up_off.svg",
    heading: "Compliant",
    para: "Screening procedures & flexible investment rules. Choose custodians and payment gateways",
  },
  {
    img: "/images/gesture_black_24dp1.svg",
    heading: "Flexible",
    para: " A comprehensive, flexible solution - adaptable to meet requirements across different jurisdictions.",
  },
  {
    img: "/images/diversity_2.svg",
    heading: "Network",
    para: "Benefit from new interoperable channels on web3 maximizing distribution capabilities",
  },
];

const Contribute = () => {
  return (
    <div className="contribute-main pb-[494px]">
      <div className="contribute-section">
        <div className="flex text-center flex-col items-center mb-[64px]">
          <img
            src="/images/charger.svg"
            alt="charger"
            className="w-12 sm:w-[96px] h-12 sm:h-[96px] mb-6 sm:mb-10"
          />
          <h2 className="text-[32px] md:text-5xl font-semibold leading-[48px] md:leading-[72px] text-textcolor mb-6">
            All energies, <br /> all connected
          </h2>
          <p className=" max-w-[456px] text-[20px] md:p-md font-normal leading-[30px] md:leading-[36px] text-textcolor">
            Cutting edge integrations ensuring compliant & transparent investments in your own
            platform
          </p>
        </div>
        <div className="contribute-cards">
          {contribute.map((item, index) => (
            <HemergyConributeCard
              key={index}
              icon={item.img}
              title={item.heading}
              desc={item.para}
            />
          ))}
        </div>
      </div>

      <div className="w-full absolute px-6 left-0 bottom-[-91px]">
        <DemoCard
          showIcon
          heading="Want to use our api?"
          desc="We provide a white label solution to businesses who want to develop and market their own financial products"
          btnText="Book a demo"
        />
      </div>

      <div className="wather-haf-white-bg" />
    </div>
  );
};

export default Contribute;
