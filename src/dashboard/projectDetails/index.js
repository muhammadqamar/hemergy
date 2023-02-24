import Tokens from "./tokens";
import TabInfo from "@/utils/tabInfo";
import UserCard from "@/utils/userCard";

const Index = () => {
  return (
    <div className="dashboard-container">
      <div className="project-detail bg-white">
        <div className="detail-img">
          <img src="/images/dummy.png" alt="detail" className="detail-banner-img" />
          <div className="w-full flex-box">
            <div className="relative">
              <TabInfo
                icon="/images/hot.svg"
                text="Hot"
                color="text-white"
                w="20"
                h="20"
                bg="bg-red600"
                bold="font-semibold"
              />
            </div>
            <div className="relative">
              <TabInfo
                icon="/images/Polygon.svg"
                text="657.4"
                color="text-white"
                w="10"
                h="10"
                bg="bg-textcolor"
                bold="font-semibold"
              />
            </div>
          </div>
        </div>

        <div className="project-detail-about">
          <div className="flex-box gap-2">
            <TabInfo
              icon="/images/clear_day.svg"
              text="Solar Asset Name"
              color="text-textcolor"
              w="20"
              h="20"
              py
              bg="bg-cardbg"
              bold="font-semibold"
            />
            <TabInfo
              icon="/images/location_on.svg"
              text="Location name"
              color="text-textcolor"
              w="16"
              h="16"
              bold="font-semibold"
            />
          </div>
          <div>
            <h3 className="p-xl-semi mb-4">Project name</h3>
            <p className="p-sm text-gray800">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. <br /> <br />
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their
              default model text, and a search for 'lorem ipsum' will uncover many web sites still
              in their infancy. Various versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
          </div>
          <UserCard
            company
            avatar="/images/user.png"
            detail
            name="Bradley Grahams"
            designation="Project owner"
            bio="  It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal distribution of letters, as opposed to using 
            "
          />
          <UserCard
            avatar="/images/user.png"
            detail
            name="Bradley Grahams"
            designation="Project owner"
            bio="  It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal distribution of letters, as opposed to using 
            "
          />
          <UserCard
            avatar="/images/user.png"
            detail
            name="Bradley Grahams"
            designation="Project owner"
            bio="  It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal distribution of letters, as opposed to using 
            "
          />
        </div>
        <Tokens showTokenInfo />
      </div>
    </div>
  );
};

export default Index;
