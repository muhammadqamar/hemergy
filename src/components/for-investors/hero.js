import Map from "@/utils/map/Map";
import { positions } from "@/utils/map/positionData";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [upDate, setUpDate] = useState("");
  const [positionData, setPositionData] = useState([]);

  console.log(upDate);

  useEffect(() => {
    const intervil = setInterval(() => {
      const data = ["wind", "sun", "bio"];
      // i = (i + 1) % data.length;

      setUpDate(data);
    }, 2000);
    return () => clearInterval(intervil);
  }, [upDate]);

  useEffect(() => {
    setPositionData(positions);
  }, []);

  const mapCoordFilter = (type) => {
    setPositionData(positions.filter((data) => data.type === type));
  };

  return (
    <div className="hero-container ">
      <div className="hero-investors-wrapper max-w-[1440px] flex items-start  gap-16 md:gap-7 justify-center mx-auto pt-[192px] md:pt-[124px] px-[24px] flex-col lg:flex-row pb-[450px]">
        <div className="map-box w-full">
          <div className="max-w-[1005px] mx-auto hidden md:block">
            <Map positionCoords={positionData} />
          </div>

          <div className="investor-project-heading">
            <h2 className="browse-projects">Browse projects</h2>
          </div>
          <div className="map-opction justify_content ">
            <div className="flex items-center gap-2">
              <div className="input-field">
                <input className="input p-sm" placeholder="Search..." />
                <div className="pointer"></div>
                <Image src="/images/map/search.svg" alt="visibility" width={20} height={20} />
              </div>
              <div className="input-field">
                <select className="p-sm">
                  <option value="">Location</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="map-field">
                <Image
                  src="/images/map/clear_day.svg"
                  alt="visibility"
                  width={20}
                  height={20}
                  onClick={() => {
                    mapCoordFilter("sun");
                  }}
                />
              </div>
              <div className="map-field">
                <Image
                  src="/images/map/air.svg"
                  alt="visibility"
                  width={20}
                  height={20}
                  onClick={() => {
                    mapCoordFilter("wind");
                  }}
                />
              </div>
              <div className="map-field">
                <Image
                  src="/images/map/humidity_low.svg"
                  alt="visibility"
                  width={20}
                  height={20}
                  onClick={() => {
                    mapCoordFilter("bio");
                  }}
                />
              </div>
              <div className="map-field">
                <Image
                  src="/images/map/local_fire_department.svg"
                  alt="visibility"
                  width={20}
                  height={20}
                  onClick={() => {
                    mapCoordFilter("sun_fire");
                  }}
                />
              </div>
              <div className="map-field">
                <Image
                  src="/images/map/trending.svg"
                  alt="visibility"
                  width={20}
                  height={20}
                  onClick={() => {
                    // mapCoordFilter('trending');
                    setPositionData(positions);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wather-haf-white-bg" />
    </div>
  );
};

export default Hero;
