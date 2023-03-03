import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Index = ({ icon, title, desc, id }) => {
  return (
    <div className="contribute-card">
      {icon && (
        <Image
          className={id === 1 ? "home_contribute_img" : ""}
          src={icon}
          alt="icon"
          width={52}
          height={52}
        />
      )}
      <h3 className="con-card-heading">{title}</h3>
      <p className="con-card-para">{documentToReactComponents(desc)}</p>
    </div>
  );
};

export default Index;
