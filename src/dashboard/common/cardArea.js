import Slider from "react-slick";
import PortfolioCard from "@/utils/portfolioCard";

const CardArea = () => {
  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <div className="card-area">
      <div className="mb-8">
        <h2 className="p-xl mb-3">Featured projects</h2>
        <p className="p-sm text-gray900">There are hot projects lorem ipsum etc</p>
      </div>

      <div className="project-slider">
        <Slider {...settings}>
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index}>
              <PortfolioCard
                h="372px"
                banner="/images/card.png"
                projectName="Project name"
                projectDetail="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                token="200"
                tokenLabel="Available"
                btn1="Details"
                btn2="Invest"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className="flex-box mt-11">
        <button className="btn-border fit-width bg-white secondary">Browse all projects</button>
  </div>*/}
    </div>
  );
};

export default CardArea;
