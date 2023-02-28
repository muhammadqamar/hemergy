import React from "react";
import Image from "next/image";

import CalendlyModal from "@/utils/calendly";
const DemoCard = ({ showIcon, heading, desc, btnText }) => {
  return (
    <div
      className={`api-card-box  ${
        showIcon ? `py-8 md:pt-14 md:pb-12` : `py-8 md:py-20`
      }`}
    >
      {showIcon && (
        <Image src="/images/code.svg" alt="code" width={51} height={51} />
      )}
      <h1 className={`api-heading  ${showIcon && `mt-6`}`}>{heading}</h1>
      <p className="api-about">{desc}</p>

      <CalendlyModal
        btnText={btnText}
        url={"https://calendly.com/ahmed-belabdia"}
      />
    </div>
  );
};

export default DemoCard;
