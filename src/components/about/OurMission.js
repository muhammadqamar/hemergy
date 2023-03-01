import Link from "next/link";
import React from "react";

const OurMission = ({ aboutPage }) => {
  return (
    <section className="about-our-mission-div">
      <div className="flex-shrink-0">
        <img
          src={aboutPage.leftLogo.fields.file.url}
          alt="heart-1"
          className="heart-1"
        />
      </div>
      <div className="about-our-mission-detail">
        <h2 className="detail-header ">{aboutPage.missionHeading}</h2>
        <p className="detail-prep">{aboutPage.missionText.slice(0, 59)}</p>
        <p className="detail-prep">{aboutPage.missionText.slice(59, 207)}</p>
        <p className="detail-prep">{aboutPage.missionText.slice(207, 339)}</p>
        <p className="detail-prep">{aboutPage.missionText.slice(339)}</p>
        <div className="mt-12 flex justify-center">
          <Link href="" className="btn Primary">
            Get started
          </Link>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img
          src={aboutPage.rightLogo.fields.file.url}
          alt="heart-2"
          className="heart-2"
        />
      </div>
    </section>
  );
};

export default OurMission;
