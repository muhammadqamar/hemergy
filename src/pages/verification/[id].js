import Image from "next/image";
import RegisterSlider from "@/components/Authentications/registerSlider";
import VerificationBox from "@/components/Authentications/verification";
import InvestorProfile from "@/components/Authentications/investorProfile";
import Financials from "@/components/Authentications/financials";
import { useState } from "react";

const Verification = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="authentications-section">
      <div className="auth-header">
        <Image src="/images/hemergy-logo.svg" width={150} height={32} alt="logo" />
      </div>

      <div className="auth-container">
        <RegisterSlider />
        {step === 1 && <VerificationBox setStep={setStep} />}
        {step === 2 && <InvestorProfile setStep={setStep} />}
        {step === 3 && <Financials setStep={setStep} />}
      </div>

      <div className="auth-wather" />
    </div>
  );
};

export default Verification;
