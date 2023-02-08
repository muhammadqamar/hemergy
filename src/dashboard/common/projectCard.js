import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="project-card-box">
      <div className="card-head-img">
        <div className="wather-labels">
          <Image src="" alt="logo" width={20} height={20} />
          <p className="p-sm-semi  text-white">Hot</p>
        </div>
        <div className="ratio-labels">
          <Image src="" alt="logo" width={10} height={10} />
          <p className="p-sm-semi  text-white">Hot</p>
        </div>
      </div>
      <div className="p-card-about">
        <div className="c-about-header">
          <div className="solar-label">
            <Image src="" alt="logo" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
