import Image from "next/image";
import RegisterSlider from "./registerSlider";

const Index = () => {
  return (
    <div className="authentications-section">
      <div className="auth-header">
        <Image src="/images/hemergy-logo.svg" width={150} height={32} alt="logo" />
      </div>
      <div className="auth-container">
        <RegisterSlider />
        <RegisterSlider />
      </div>
      <div className="auth-wather" />
    </div>
  );
};

export default Index;
