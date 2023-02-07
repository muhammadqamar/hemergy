import Image from "next/image";
import RegisterSlider from "./registerSlider";
import SignUp from "./signUp";
import InBox from "./inBox";
import LogIn from "./logIn";
import InvestorProfile from "./investorProfile";
import Financials from "./financials";

const Index = () => {
  return (
    <div className="authentications-section">
      <div className="auth-header">
        <Image src="/images/hemergy-logo.svg" width={150} height={32} alt="logo" />
      </div>

      <div className="auth-container">
        <RegisterSlider />
        {/* <Financials />
        <InvestorProfile />
        <LogIn />
  <InBox />*/}
        <SignUp />
      </div>
      <div className="auth-wather" />
    </div>
  );
};

export default Index;
