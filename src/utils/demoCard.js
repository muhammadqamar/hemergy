import React from "react";
import Image from "next/image";
import Link from "next/link";
const DemoCard = ({ showIcon, heading, desc, btnText }) => {
  return (
    <div className="api-card-box">
      {showIcon && <Image src="/images/code.svg" alt="" width={51} height={51} />}
      <h1 className="api-heading">{heading}</h1>
      <p className="api-about">{desc}</p>

      <Link href="" className="btn Primary">
        {btnText}
      </Link>
    </div>
  );
};

export default DemoCard;
