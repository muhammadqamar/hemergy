import Image from "next/image";
import Slider from "react-slick";

const Discoverd = ({ discover }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // {
  //   const logo = howItWorkPage?.discover.map(
  //     (item) => item.fields.logo[0].fields.file.url
  //   );
  // }
  return (
    // h-auto
    <div className=" hiw-discoverd-section ">
      <div className=" hiw-discoverd-div relative pb-[363px] lg:pb-[1596px]">
        {/* Start */}
        <section className=" relative lg:absolute z-[1] w-full left-0 mb-[104px] lg:mb-0">
          <div className="mt-[76px] mb-40 hidden  lg:flex flex-col gap-20 relative ">
            {discover?.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-center ${
                  (index + 1) % 2 == 0
                    ? `flex-col lg:flex-row-reverse gap-[110px]`
                    : `flex-col lg:flex-row gap-[106px]`
                } `}
              >
                <img
                  className="object-contain"
                  width={520}
                  height={346}
                  src={item.fields.logo[0].fields.file.url}
                  alt="image"
                />
                <div className="text-center w-[296px] ">
                  <h2 className="text-textcolor p-xl-semi mb-2 font-semibold">
                    {item.fields.heading}
                  </h2>
                  <p className="p-lg text-weight-normal text-textcolor">
                    {item.fields.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="discover__slider block lg:hidden">
            <Slider {...settings}>
              {discover?.map((item, index) => (
                <div key={index} className="">
                  <div className="w-[274px] h-auto sm:w-auto mx-auto ">
                    <img
                      className="mx-auto"
                      width={520}
                      height={346}
                      src={item.fields.logo[0].fields.file.url}
                      alt="image"
                    />
                  </div>
                  <div className="text-center w-[296px] mx-auto mt-8">
                    <h2 className="text-textcolor p-xl-semi mb-2 font-semibold">
                      {item.fields.heading}
                    </h2>
                    <p className="p-lg text-weight-normal text-textcolor">
                      {item.fields.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
        <div className="max-w-[558px] mx-auto text-center block lg:hidden">
          <Image
            className="mx-auto"
            src="/images/hiden_img.svg"
            alt="logo"
            width={136}
            height={136}
          />
          <h1 className="p-xl-semi text-textcolor mt-10 mb-6">
            No hidden fees, just transparent projects
          </h1>
          <p className="p-lg font-normal text-textcolor">
            Contribute to high transparency and low pollution future
          </p>
        </div>
      </div>
      <div className="wather-haf-white-bg" />
    </div>
  );
};

export default Discoverd;
