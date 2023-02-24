import Progress from "./progress";
import TrasactionCard from "@/utils/TransactionCard";

const Wallet = () => {
  return (
    <div className="insight-card w-full lg:w-[32%] bg-blue800 ">
      <div className="mb-8">
        <h2 className="p-xl text-white mb-3">Wallet</h2>
        <p className="p-sm text-white">Your earnings are automatically saved.</p>
      </div>
      <div className="mb-[60px]">
        <Progress />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <button className="secondary flex items-center justify-center rounded-xl text-white bg-blue700">
          Connect Cryptowallet
        </button>
        <button className="btn secondary">Withdraw</button>
      </div>

      <div className="mb-6">
        <h3 className="p-lg text-white mb-2">Latest returns</h3>
      </div>
      <div className="gradient-bg h-[354px]">
        <div className="transac-bg scrollbar-hide">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index}>
              <TrasactionCard
                txShort="Tx"
                txName="7fjhf89fhjf989"
                txDate="1 min ago"
                txToken="3.45"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
