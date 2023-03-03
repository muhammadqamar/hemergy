import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const OurMission = ({ ourContribute }) => {
  const { fields } = ourContribute;
  return (
    <section className="about-our-mission-div">
      <div className="flex-shrink-0">
        <img src={fields?.leftImage.fields.file.url} alt="heart-1" className="heart-1" />
      </div>
      <div className="about-our-mission-detail">
        <h2 className="detail-header ">{fields?.heading}</h2>
        <p className="detail-prep">{documentToReactComponents(fields?.description)}</p>
        <div className="mt-12 flex justify-center">
          <Link href="/register" className="btn Primary">
            Get started
          </Link>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img src={fields?.rightImage.fields.file.url} alt="heart-2" className="heart-2" />
      </div>
    </section>
  );
};

export default OurMission;
