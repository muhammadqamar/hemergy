import Image from "next/image";
import Link from "next/link";

const TeamCard = ({ team }) => {
  return (
    <div className="team-card">
      <div className="card-body">
        <div className="mt-6">
          <Image src={team?.image} width={144} height={144} alt="rating" />
        </div>
        <div className="max-w-[240px]">
          <h5 className="mt-6 font-semibold text-[20px] m-0 text-textcolor font-Poppins">
            {team.title}
          </h5>
          <h6 className="mt-6 font-semibold text-[16px] m-0 text-textcolor font-Poppins">
            {team?.desg}
          </h6>
          <p className="mt-6 font-normal text-[14px] leading-[21px] m-0 text-textcolor font-Poppins">
            {team?.detail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
