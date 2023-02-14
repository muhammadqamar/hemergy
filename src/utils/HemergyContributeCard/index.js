import Image from "next/image";

const Index = ({ icon, title, desc }) => {
  return (
    <div className="contribute-card">
      {icon && <Image src={icon} alt="icon" width={52} height={52} />}
      <h3 className="con-card-heading">{title}</h3>
      <p className="con-card-para">{desc}</p>
    </div>
  );
};

export default Index;
