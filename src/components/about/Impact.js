import Image from "next/image";
import React, { useState } from "react";

const impactdata = [
  {
    id: 1,
    title: "Community conservation",
    detail: ` We create opportunities to make local communities participate as much as possible in local projects. This generates work and shared trust in the future.
    `,
    image: "community-conservation.jpeg",
  },
  {
    id: 2,
    title: "Local expertise empowerment",
    detail: `We support local expertise with bright ideas and international influence. We believe in local teams who bring value to their local communities and go beyond the limitations.`,
    image: "local-expertise-logo.jpg",
  },
  {
    id: 3,
    title: "Wise technologies support",
    detail: `We support state of the art renewable energy generators and pollution-control technologies when they are used wisely with a minimal carbon footprint and low social cost.`,
    image: "wise-logo.jpg",
  },
  {
    id: 4,
    title: "Trees plantation",
    detail: `Reforestation projects bring life and biodiversity. They help the environment and in some cases people living in the forests. Planting trees is doing more than carbon capture. We can help.`,
    image: "trees-plantation.jpeg",
  },
];
const Impact = () => {
  const [impactDetail, setImpactDetail] = useState(1);
  return (
    <section className="about-impact-section">
      <div className="about-impact-div ">
        <h2 className="about-impact-header ">Your impact</h2>
        <p className="about-impact-text">
          Beyond your expected earnings, your contribution is bringing much more
          to people and communities.
        </p>
        {/* Dynamic */}
        <div className="about-impact-body-div ">
          <div className="about-impact-left">
            <img
              className=""
              src={`/images/${
                impactdata?.filter((data) => data.id === impactDetail)[0].image
              }`}
            />
            <div className="about-impact-right">
              <h3 className="about-impact-right-header ">
                {
                  impactdata?.filter((data) => data.id === impactDetail)[0]
                    .title
                }
              </h3>
              <p className="about-impact-right-prep ">
                {
                  impactdata?.filter((data) => data.id === impactDetail)[0]
                    .detail
                }
              </p>
            </div>
          </div>
          <div className="image-list mt-6">
            {impactdata?.map((img, i) => {
              return (
                <>
                  <img
                    key={i}
                    src={`/images/${img.image}`}
                    className={`cursor-pointer  ${
                      img.id === impactDetail && "border-8 border-[#4E62EE] "
                    }`}
                    onClick={() => {
                      setImpactDetail(img.id);
                    }}
                    alt="image"
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
