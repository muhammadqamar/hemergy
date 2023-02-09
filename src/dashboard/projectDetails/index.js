import Image from "next/image";

const Index = () => {
  return (
    <div className="dashboard-container">
      <div className="project-detail">
        <div className="detail-img">
          <img src="/images/card.png" alt="detail" className="detail-banner-img" />
          <div className="w-full flex-box">
            <div className="labels-frame wather-labels">
              <Image src="/images/hot.svg" alt="logo" width={20} height={20} />
              <p className="p-sm-semi  text-white">Hot</p>
            </div>
            <div className=" labels-frame ratio-labels">
              <Image src="/images/Polygon.svg" alt="logo" width={10} height={10} />
              <p className="p-sm-semi  text-white">657.4</p>
            </div>
          </div>
        </div>
        <div className="project-detail-about"></div>
      </div>
    </div>
  );
};

export default Index;
