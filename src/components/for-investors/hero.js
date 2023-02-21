import Map from '@/utils/map/Map';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [upDate, setUpDate] = useState('');

  console.log(upDate);

  useEffect(() => {
    const intervil = setInterval(() => {
      const data = ['wind', 'sun', 'bio'];
      // i = (i + 1) % data.length;

      setUpDate(data);
    }, 2000);
    return () => clearInterval(intervil);
  }, [upDate]);

  return (
    <div className="hero-container ">
      <div className=" mx-auto pt-[160px]"></div>
      <div className="hero-investors-wrapper">
        <div className="map-box mx-auto">
          <div>
            <Map />
          </div>
          {/* <div className="map">
            <img src="/images/map/map.svg" alt="map" />
          </div> */}

          <div className="investor-project-heading">
            <h2 className="browse-projects">Browse projects</h2>
          </div>
          <div className="map-opction">
            <div className="flex items-center gap-2">
              <div className="input-field">
                <input className="input p-sm" placeholder="Search..." />
                <div className="pointer"></div>
                <Image
                  src="/images/map/search.svg"
                  alt="visibility"
                  width={20}
                  height={20}
                />
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
                />
              </div>
              <div className="map-field">
                <Image
                  src="/images/map/air.svg"
                  alt="visibility"
                  width={20}
                  height={20}
                />
              </div>
              <div className="map-field">
                <Image
                  src="/images/map/humidity_low.svg"
                  alt="visibility"
                  width={20}
                  height={20}
                />
              </div>
              <div className="map-field">
                <Image
                  src="/images/map/local_fire_department.svg"
                  alt="visibility"
                  width={20}
                  height={20}
                />
              </div>
              <div className="map-field">
                <Image
                  src="/images/map/trending.svg"
                  alt="visibility"
                  width={20}
                  height={20}
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
