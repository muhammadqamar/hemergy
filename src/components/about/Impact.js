import React, { useState } from "react";

const Impact = ({ aboutPage }) => {
  const { impactHeading, impactText, impactCards } = aboutPage;
  const [impactDetail, setImpactDetail] = useState(0);
  return (
    <section className="about-impact-section">
      <div className="about-impact-div ">
        <h2 className="about-impact-header ">{impactHeading}</h2>
        <p className="about-impact-text">{impactText}</p>
        {/* Dynamic */}

        <div className="about-impact-body-div ">
          {impactCards?.map((item, index) => {
            return (
              impactDetail == index && (
                <div key={index} className="about-impact-left">
                  <img className="" src={item.fields.image.fields.file.url} />
                  <div className="about-impact-right">
                    <h3 className="about-impact-right-header ">{item.fields.title}</h3>
                    <p className="about-impact-right-prep ">{item.fields.detail}</p>
                  </div>
                </div>
              )
            );
          })}

          <div className="image-list mt-6">
            {impactCards?.map((item, index) => (
              <img
                key={index}
                src={item.fields.image.fields.file.url}
                className={`cursor-pointer ${
                  impactDetail == index && "border-8 border-[#4E62EE] "
                } `}
                onClick={() => {
                  setImpactDetail(index);
                }}
                alt="image"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="about-impact-wather-bg" />
    </section>
  );
};

export default Impact;
