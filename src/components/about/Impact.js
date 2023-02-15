import Image from "next/image";
import React, { useState } from "react";

const impactdata = [
  {
    id: 1,
    title: "Community conservation",
    detail: `We create opportunities to protect biodiversity and make local
    communities participate as much as possible in local projects.
    `,
    // image: 'about_2.png',
    image: "testing/test (1).jpg",
  },
  {
    id: 2,
    title: "Community ",
    detail: `
    This generates work and shared trust in the future.`,
    // image: 'about_3.png',
    image: "testing/test (2).jpg",
  },
  {
    id: 3,
    title: "Community conservation",
    detail: `We create opportunities to protect biodiversity and make local
    communities participate as much as possible in local projects.
   `,
    image: "testing/test (3).jpg",
  },
  {
    id: 4,
    title: "Community ",
    detail: `
    This generates work and shared trust in the future.`,
    // image: 'about_5.png',
    image: "testing/test (4).jpg",
  },
];
const Impact = () => {
  const [impactDetail, setImpactDetail] = useState(1);
  return (
    <section className="about-impact-section  ">
      <div className="about-impact-div ">
        <h2 className="about-impact-header ">Your impact</h2>
        {/* Dynamic */}
        <div className="about-impact-body-div ">
          <div className="about-impact-left">
            <img
              className=""
              src={`/images/${impactdata?.filter((data) => data.id === impactDetail)[0].image}`}
            />
            <div className="about-impact-right ">
              <h3 className="about-impact-right-header ">
                {impactdata?.filter((data) => data.id === impactDetail)[0].title}
              </h3>
              <p className="about-impact-right-prep ">
                {impactdata?.filter((data) => data.id === impactDetail)[0].detail}
              </p>
            </div>
          </div>
          <div className="image-list mt-6">
            {impactdata?.map((img) => {
              return (
                <>
                  <img
                    src={`/images/${img.image}`}
                    className={`cursor-pointer  ${
                      img.id === impactDetail && "border-8 border-[#4E62EE] "
                    }`}
                    onClick={() => {
                      setImpactDetail(img.id);
                    }}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="about-impact-wather-bg" />
    </section>
  );
};

export default Impact;
