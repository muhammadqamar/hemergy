import Link from 'next/link';
import React from 'react';

const OurMission = () => {
  return (
    <section className="about-our-mission-section">
      <div className="about-our-mission-div">
        <div className="about-our-mission-detail">
          <h2 className="detail-header ">Our mission</h2>
          <p className="detail-prep">
            We accelerate the energy transition in harmony with nature.
          </p>
          <p className="detail-prep">
            We open a direct and seamless access to environmental and renewable
            energy assets that handle a fair structure of costs, both social and
            economic.
          </p>
          <p className="detail-prep">
            These assets can be traded simply and instantly, across the
            communities to create a global engagement towards a low carbon
            future.
          </p>
          <p className="detail-prep">
            Based on a customized low carbon blockchains, we provide compliant
            solutions that put trust, transparency and efficiency at the heart
            of our solutions.
          </p>
        </div>
        <div className="mt-12">
          <Link href="" className="btn Primary">
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
