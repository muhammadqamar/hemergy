import SideBar from "@/dashboard/sideBar";
import Card from "@/dashboard/common/projectCard";

const Dashboard = () => {
  return (
    <div className=" relative">
      <SideBar />

      <div className="ml-24">
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
