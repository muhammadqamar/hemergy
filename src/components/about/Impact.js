import Image from 'next/image';
import React from 'react';

const Impact = () => {
  return (
    <section className="about-impact-section  ">
      <div className="about-impact-div ">
        <h2 className="about-impact-header ">Your impact</h2>
        <div className="about-impact-body-div ">
          {/* Left side Images */}
          <div className="about-impact-left">
            <Image src={'/images/about_1.png'} width={480} height={480} />
            <div className="image-list">
              <Image src={'/images/about_2.png'} width={108} height={80} />
              <Image src={'/images/about_3.png'} width={108} height={80} />
              <Image src={'/images/about_4.png'} width={108} height={80} />
              <Image src={'/images/about_5.png'} width={108} height={80} />
            </div>
          </div>
          {/* Right Text */}
          <div className="about-impact-right">
            <h3 className="about-impact-right-header ">
              Community
              <br />
              conservation
            </h3>
            <p className="about-impact-right-prep ">
              We create opportunities to protect biodiversity and make local
              communities participate as much as possible in local projects.
              This generates work and shared trust in the future.
            </p>
          </div>
        </div>
      </div>
      <div className="about-impact-wather-bg" />
    </section>
  );
};

export default Impact;
