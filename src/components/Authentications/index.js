import { useRouter } from "next/router";
import Image from "next/image";
import RegisterSlider from "./registerSlider";
import SignUp from "./signUp";
import InBox from "./inBox";
import LogIn from "./verification";
import InvestorProfile from "./investorProfile";
import Financials from "./financials";

const Index = () => {
  const routes = useRouter();
  return (
    <div className="authentications-section">
      <div className="auth-header">
        <Image src="/images/hemergy-logo.svg" width={150} height={32} alt="logo" />
      </div>
      {routes.asPath === "/register" && (
        <div className="auth-container">
          <RegisterSlider />
          <SignUp />
        </div>
      )}
      {routes.asPath === "/login" && (
        <div className="auth-container">
          <LogIn />
        </div>
      )}
      {routes.asPath === "/inbox" && (
        <div className="auth-container">
          <InvestorProfile />
          <InBox />
          <Financials />
        </div>
      )}
      <div className="auth-wather" />
    </div>
  );
};

export default Index;
