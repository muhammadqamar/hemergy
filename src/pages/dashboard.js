import SideBar from "@/dashboard/sideBar";
import CardArea from "@/dashboard/common/cardArea";
import LocationCard from "@/dashboard/common/locationCard";

const Dashboard = () => {
  return (
    <div className=" relative">
      <SideBar />
      <div className="flex-box">
        <CardArea />
        <LocationCard />
      </div>
    </div>
  );
};

export default Dashboard;
