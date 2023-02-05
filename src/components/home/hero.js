import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-container ">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="main-heading">
            Invest in the <br /> future of our planet
          </h1>
          <h3 className="sub-heading ">
            Hemergy is a cutting-edge <br />
            <strong> renewable energies</strong> investment platform
          </h3>
          <h3 className="sub-heading about-w">
            See what you earn from
            <span>
              <Image src="/images/air.svg" width={32} height={32} alt="wind" /> Wind
            </span>
          </h3>

          <Link href="" className="btn Primary">
            Get started
          </Link>
        </div>

        <div className="hero-banner-img">
          <img src="/images/hero-banner.png" className="hero-banner" alt="banner" />
        </div>
      </div>
      <div className="hero-wather-img" />
    </div>
  );
};

export default Hero;
