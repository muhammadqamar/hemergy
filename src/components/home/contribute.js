import HemergyConributeCard from "@/utils/HemergyContributeCard";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Contribute = ({ homePage }) => {
  const { ourContribute, cards } = homePage;
  return (
    <div className="contribute-main">
      <div className="contribute-section">
        <div className="contribute-heading">
          <img
            src={ourContribute?.fields?.leftImage.fields.file.url}
            alt="heart-1"
            className="heart-1"
          />
          <h2 className="con-heading">
            {documentToReactComponents(ourContribute?.fields?.description)}
          </h2>
          <img
            src={ourContribute?.fields?.rightImage.fields.file.url}
            alt="heart-2"
            className="heart-2"
          />
        </div>
        <div className="contribute-cards">
          {cards.map((item, index) => (
            <HemergyConributeCard
              key={index}
              index={index}
              icon={item.fields.logo[0].fields.file.url}
              title={item.fields.cardHeading}
              desc={item.fields.cardDescription}
            />
          ))}
        </div>
      </div>
      <div className="wather-haf-white-bg" />
    </div>
  );
};

export default Contribute;
