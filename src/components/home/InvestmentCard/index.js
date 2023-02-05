import Image from "next/image";
import AvoidedCard from "./avoidedCard";
import Contribution from "./contribution";
import EarningCard from "./earningCard";

const Index = () => {
  return (
    <div className="investment-card">
      <div className="invest-about">
        <Image src="/images/local_atm.svg" alt="investment" width={51} height={51} />
        <h3 className="investment-heading">Investment calculator</h3>
        <p className="investment-para">
          Use this calculator to see an indication of your average return on investment, and your
          environmental impact
        </p>
      </div>
      {/** Contribution card */}
      <Contribution />
      {/** Earning  Card */}
      <EarningCard />
      {/** Avoided Card */}
      <AvoidedCard />
    </div>
  );
};

export default Index;
