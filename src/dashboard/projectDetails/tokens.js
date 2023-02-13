import Image from "next/image";

const Tokens = ({showTokenInfo}) => {
  return (
    <div className="tokens-wrapper">
     {showTokenInfo && <h6 className="text-center p-md ">1,234 Tokens issued</h6>}
      <div className="available-token my-[57px]">
        <Image src="/images/token.png" alt="token" width={32} height={32} />
        <div className="text-center">
          <h1 className="mb-1 p-2xl">200</h1>
          <p className="text-white p-sm-semi">Equity tokens available</p>
        </div>
      </div>
      <button className="w-full mb-6 btn secondary">Invest now</button>

      <div className="gap-4 mb-4 flex-box">
        <div className="power-box">
          <Image src="/images/bolt.svg" alt="power" width={40} height={40} />
          <h4 className="text-white p-xl">2.3kW</h4>
          <p className="font-medium text-white p-x-sm">Power generated</p>
        </div>
        <div className="power-box">
          <Image src="/images/cloud_off.svg" alt="power" width={40} height={40} />
          <h4 className="text-white p-xl">2.3kW</h4>
          <p className="font-medium text-white p-x-sm">Carbon avoided</p>
        </div>
      </div>

      <div className="mb-6 year-box">
        <div className="mb-4 flex-box">
          <div>
            <h5 className="mb-1 text-white p-xl">15</h5>
            <p className="font-medium text-white p-x-sm">Year</p>
          </div>
          <div>
            <h5 className="mb-1 text-white p-xl">35,553</h5>
            <p className="font-medium text-right text-white p-x-sm">USDC</p>
          </div>
        </div>
        <div className="year-range">
          <input
            type="range"
            min="10"
            max="300"
            step="5"
            defaultValue={10}
            style={{
              backgroundSize: `40% , 100% `,
            }}
          />
        </div>
      </div>
     {showTokenInfo && <div className="what-token">
        <div className="justify-start gap-2 mb-2 flex-box">
          <Image src="/images/info.svg" alt="info" width={24} height={24} />
          <h5 className="font-semibold text-white p-sm">What are tokens?</h5>
        </div>

        <p className="font-normal p-sm-semi text-blue200">
          Tokens represent part of the physical asset asset name. When you buy tokens, you are
          investing in these.
        </p>
      </div>
}
    </div>
  );
};

export default Tokens;
