import { useEffect, useState } from "react";

import Image from "next/image";


import RegisterSlider from "@/components/Authentications/registerSlider";
import VerificationBox from "@/components/Authentications/verification";
import InvestorProfile from "@/components/Authentications/investorProfile";
import Financials from "@/components/Authentications/financials";
import WalletOption from "@/utils/walletConnect/connectors";

const Verification = () => {
  const [step, setStep] = useState(4);
  const [loader, setLoading] = useState(true)
  const [userDetail, setUserDetail] = useState()

  useEffect(()=>{
    setUserDetail({email: localStorage.getItem("hemergy-email")})
  },[])


  return (
    <div className="authentications-section">
      <div className="auth-header">
        <Image src="/images/hemergy-logo.svg" width={150} height={32} alt="logo" />
      </div>

      {loader && <div className="auth-container">
        <RegisterSlider />
        {step === 1 && <VerificationBox userDetail={userDetail} setStep={setStep} />}
        {step === 2 && <InvestorProfile userDetail={userDetail} setStep={setStep} />}
        {step === 3 && <Financials userDetail={userDetail} setStep={setStep} />}
        {step === 4 && <WalletOption userDetail={userDetail} setStep={setStep} />}
      </div>}


      <div className="auth-wather" />
    </div>
  );
};

export default Verification;


