import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [upDate, setUpDate] = useState("");

  console.log(upDate);

  useEffect(() => {
    const intervil = setInterval(() => {
      const data = ["wind", "sun", "bio"];
      // i = (i + 1) % data.length;

      setUpDate(data);
    }, 2000);
    return () => clearInterval(intervil);
  }, [upDate]);

  return (
    <div className="hero-container ">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="main-heading">
            Swift set-up & <br />
            ESG compliant
          </h1>
          <h3 className="sub-heading ">
            Build your sustainable digital <br />
            <strong> crowdfunding platform</strong> in days
          </h3>
          <h3 className="sub-heading about-w">
            Reach your ESG goals by issuing and distributing connected financial products on-chain
          </h3>

          <Link href="" className="btn Primary">
            Get started
          </Link>
        </div>

        <div className="hero-banner-img">
          <img src="/images/hero-start.png" className="hero-start" alt="banner" />
          <img src="/images/hero-wather-bg.png" className="hero-wather" alt="banner" />
          <img src="/images/hero-user-card.png" className="hero-user-card" alt="banner" />
        </div>
      </div>
      <div className="hero-wather-img" />
    </div>
  );
};

export default Hero;
