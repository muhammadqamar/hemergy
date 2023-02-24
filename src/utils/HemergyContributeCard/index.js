import Image from "next/image";

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
      {(id === 1 && (
        <p className="con-card-para">
          {desc.slice(0, 39)}
          <strong>{desc.slice(39, 47)}</strong>
          {desc.slice(47, 50)} {desc.slice(50)}
        </p>
      )) ||
        (id === 2 && (
          <p className="con-card-para">
            {desc.slice(0, 4)} <strong>{desc.slice(4, 11)}</strong>{" "}
            {desc.slice(11, 73)} <br />
            {desc.slice(73)}
          </p>
        )) ||
        (id === 3 && (
          <p className="con-card-para">
            {desc.slice(0, 24)} <strong>{desc.slice(24, 35)}</strong>
            {desc.slice(35)}
          </p>
        )) || <p className="con-card-para">{desc}</p>}
    </div>
  );
};

export default Index;
