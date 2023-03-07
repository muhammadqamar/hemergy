import Image from "next/image";
import RegisterSlider from "@/components/Authentications/registerSlider";
import SignUp from "@/components/Authentications/signUp";
import InBox from "@/components/Authentications/inBox";
import { useEffect, useState } from "react";
import Link from "next/link";

const Register = ({ query }) => {
  const [registerState, setRegisterState] = useState("");
  useEffect(() => {
    console.log(query);
    if (query?.email) {
      setRegisterState({ email: query?.email });
    } else {
      setRegisterState({ success: query?.success });
    }
  }, [query]);

  return (
    <div className="authentications-section">
      <Link href="/" className="auth-header">
        <Image src="/images/hemergy-logo.svg" width={150} height={32} alt="logo" />
      </Link>

      <div className="auth-container">
        <RegisterSlider />
        {query?.success || !!registerState ? (
          <InBox setRegisterState={setRegisterState} registerState={registerState} />
        ) : (
          <SignUp setRegisterState={setRegisterState} />
        )}
      </div>

      <div className="auth-wather" />
    </div>
  );
};

export default Register;

export const getServerSideProps = (context) => {
  return {
    props: {
      query: context?.query,
    },
  };
};
