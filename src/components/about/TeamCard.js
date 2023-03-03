import Image from "next/image";
import Link from "next/link";

const TeamCard = ({ team }) => {
  const { fields } = team;
  return (
    <div className="team-card">
      <div className="card-body">
        <div className="mt-6">
          <img
            src={fields?.userImage.fields.file?.url}
            className="w-[144px] h-[144px] rounded-[50%] object-fill shadow-xsshadow"
            alt="rating"
          />
        </div>
        <div className="max-w-[240px]">
          <h5 className="mt-6 font-semibold text-[20px] m-0 text-textcolor font-Poppins">
            {fields.userName}
          </h5>
          <h6 className="mt-6 font-semibold text-[16px] m-0 text-textcolor font-Poppins">
            {fields.category}
          </h6>
          <p className="mt-6 font-normal text-[14px] leading-[21px] m-0 text-textcolor font-Poppins">
            {fields?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
