import TabInfo from "./tabInfo";
import FundingDate from "./fundingDate";
import UserCard from "./userCard";
import InvestmentCalculator from "@/dashboard/projectDetails/tokens";
import ProjectGallerySlider from "./gallerSlider";
import Image from "next/image";
import Link from "next/link";
export default function ProjectDetailSection() {
  return (
    <div className="project-detail-page hero-container  pt-[185px]">
      <Link href="" className="flex items-center w-[174px] mx-auto justify-center gap-2 mb-[30px]">
        <img
          src="/images/keyboard_arrow_right.svg"
          alt="arrow"
          className="w-5 h-5 object-scale-down rotate-180"
        />
        <h6 className="p-sm font-medium text-white">Back to all projects</h6>
      </Link>
      <div className="bg-white rounded-[40px] overflow-hidden max-w-[880px] m-auto ">
        <div className="project-detail-page">
          <div className="slider">
            <ProjectGallerySlider />
          </div>
        </div>
        <div className="flex p-[32px] gap-[32px] ">
          <div className="meta max-w-[60%]">
            <div className="flex justify-between w-full">
              <TabInfo
                icon="/images/clear_day.svg"
                text="Solar Asset Name"
                color="text-textcolor"
                w="17"
                h="17"
                bg="bg-cardbg"
                bold="font-semibold"
              />
              <TabInfo
                icon="/images/location_on.svg"
                text="Location name"
                color="text-textcolor"
                bold="font-medium"
              />
            </div>
            <h1 className="pt-[24px] pb-[17px] text-[32px] leading-[40px] font-semibold ">
              Project name
            </h1>
            <div className="pb-[17px]">
              <FundingDate to="1 Sep 2023" from="1 Sep 2024" />
            </div>
            <p>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="pt-[30px]">
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their
              default model text, and a search for 'lorem ipsum' will uncover many web sites still
              in their infancy. Various versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
            <div className="pt-[32px]">
              <UserCard
                avatar="/images/user.png"
                name="Bradley Grahams"
                designation="Project owner"
                bio="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
              />
            </div>
          </div>

          <div className="calculator">
            <InvestmentCalculator showTokenInfo={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
