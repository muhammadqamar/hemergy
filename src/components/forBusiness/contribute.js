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
    <div className="contribute-main">
      <div className="contribute-section">
        <div className="contribute-heading">
          {/* <img src="/images/contribute-left.png" alt="heart-1" className="heart-1" /> */}
          <h2 className="con-heading">
            <strong>All energies, all connected</strong>
            <br />
            Cutting edge integrations ensuring compliant & transparent investments in your own
            platform
          </h2>
          {/* <img src="/images/contribute-right.png" alt="heart-2" className="heart-2" /> */}
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

      <div className="wather-haf-white-bg" />
    </div>
  );
};

export default Contribute;
