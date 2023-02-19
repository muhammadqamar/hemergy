import RegisterSlider from "@/components/Authentications/registerSlider";
import LogIn from "@/components/Authentications/login";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <div className="authentications-section">
      <Link href="/" className="auth-header">
        <Image src="/images/hemergy-logo.svg" width={150} height={32} alt="logo" />
      </Link>

      <div className="auth-container">
        <RegisterSlider />
        <LogIn />
      </div>

      <div className="wather-haf-white-bg" />
    </div>
  );
};

export default Register;
