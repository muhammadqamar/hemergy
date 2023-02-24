import HemergyConributeCard from "@/utils/HemergyContributeCard";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const contributes = [
  {
    id: 1,
    img: "/images/pan_tool_alt.svg",
    heading: "Varied",
    para: "Browse a selection of renewable energy projects to invest in, both locally and abroad",
  },
  {
    id: 2,
    img: "/images/query_stats.svg",
    heading: "Transparent",
    para: "See exactly how your investment is going, and where the returns are from - no greenwashing!",
  },
  {
    id: 3,
    img: "/images/verified_user.svg",
    heading: "Protected",
    para: "Your investment is fully reversible if the project doesn’t start - invest with peace of mind",
  },
];

const Contribute = ({ homePage }) => {
  return (
    <div className="contribute-main">
      <div className="contribute-section">
        <div className="contribute-heading">
          <img
            // src="/images/contribute-left.png"
            src={homePage?.contributeLeftLogo?.fields.file.url}
            alt="heart-1"
            className="heart-1"
          />
          <h2 className="con-heading">
            {/* <strong>Contribute </strong>to the energy transition while
            <strong> doing good </strong>
            in local communities and abroad */}
            {documentToReactComponents(homePage?.contributeHeading)}
          </h2>
          <img
            // src="/images/contribute-right.png"
            src={homePage?.contributeRightLogo.fields.file.url}
            alt="heart-2"
            className="heart-2"
          />
        </div>
        <div className="contribute-cards">
          {contributes.map((item, index) => (
            <HemergyConributeCard
              id={item.id}
              key={index}
              // icon={item.fields.logo.fields.file.url}
              // title={item.fields.logo.fields.title}
              // desc={item.fields.description}
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
