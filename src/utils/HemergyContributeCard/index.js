import Image from "next/image";

const Index = ({ icon, title, desc, id }) => {
  return (
    <div className="contribute-card">
      {icon && <Image src={icon} alt="icon" width={52} height={52} />}
      <h3 className="con-card-heading">{title}</h3>
      {id === 2 ? (
        <p className="con-card-para">
          {desc.slice(0, 4)} <strong>{desc.slice(4, 11)}</strong> {desc.slice(11, 73)} <br />
          {desc.slice(73)}
        </p>
      ) : (
        <p className="con-card-para">{desc} </p>
      )}
    </div>
  );
};

export default Index;
