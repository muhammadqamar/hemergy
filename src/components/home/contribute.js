import HemergyConributeCard from "@/utils/HemergyContributeCard";

const contribute = [
  {
    img: "/images/pan_tool_alt.svg",
    heading: "Varied",
    para: "Browse a selection of renewable energy projects to invest in, both locally and abroad",
  },
  {
    img: "/images/query_stats.svg",
    heading: "Transparent",
    para: "See exactly how your investment is going, and where the returns are from - no greenwashing!",
  },
  {
    img: "/images/verified_user.svg",
    heading: "Protected",
    para: "Your investment is fully reversible if the project doesn’t start - invest with peace of mind",
  },
];

const Contribute = () => {
  return (
    <div className="contribute-main">
      <div className="contribute-section">
        <div className="contribute-heading">
          <img src="/images/contribute-left.png" alt="heart-1" className="heart-1" />
          <h2 className="con-heading">
            <strong>Contribute</strong> to the energy reansition while <strong>doing good</strong>{" "}
            in local communities and abroad
          </h2>
          <img src="/images/contribute-right.png" alt="heart-2" className="heart-2" />
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
