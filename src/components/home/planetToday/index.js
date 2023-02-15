import InvestingTab from "./investingTab";
import ApiCard from "../apiCard";

const Index = () => {
  return (
    <div className="planet-today-sectiion">
      <div className="w-full z-[1] left-0 absolute mt-[-140px]">
        <InvestingTab />
      </div>
      <div className=" w-full left-0 bottom-[-70px] absolute">
        <ApiCard />
      </div>
      <div className="white-wather-bg" />
    </div>
  );
};

export default Index;
