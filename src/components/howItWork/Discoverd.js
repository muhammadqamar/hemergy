import Image from 'next/image';

const discoverd = [
  {
    img: '/images/Home-1.png',
    heading: 'Discover',
    desc: 'Browse projects and profiles of project holders',
  },
  {
    img: '/images/Home-2.png',
    heading: 'Contribute',
    desc: 'To projects or existing facilities using crypto or fiat',
  },
  {
    img: '/images/Home-3.png',
    heading: 'Collect',
    desc: 'returns on contributions (you decide when, pay out can be done in fiat to bank account or in crypto to wallet).',
  },
  {
    img: '/images/Home-4.png',
    heading: 'See your impact',
    desc: 'and prove it to the whole world using certificates / avoided carbon / shared wealth',
  },
];

const Discoverd = () => {
  return (
    // h-auto
    <div className=" hiw-discoverd-section ">
      <div className=" hiw-discoverd-div relative pb-[2550px] lg:pb-[1596px]">
        {/* Start */}
        <section className="absolute z-[1] w-full left-0">
          <div className="discover__slider mt-[76px] mb-40 flex flex-col gap-20 relative">
            {discoverd.map((items, index) => (
              <div
                key={index}
                className={`flex items-center justify-center    ${
                  (index + 1) % 2 == 0
                    ? `flex-col lg:flex-row-reverse gap-[110px]`
                    : `flex-col lg:flex-row gap-[106px]`
                  // ? `flex-row-reverse gap-[110px]`
                  // : `flex-row gap-[106px]`
                } `}
              >
                <Image
                  className="object-contain"
                  width={520}
                  height={346}
                  src={items.img}
                />
                <div className="text-center w-[296px] ">
                  <h2 className="text-textcolor p-xl-semi mb-2 font-semibold">
                    {items.heading}
                  </h2>
                  <p className="p-lg font-normal text-textcolor">
                    {items.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="wather-haf-white-bg" />
    </div>
  );
};

export default Discoverd;
