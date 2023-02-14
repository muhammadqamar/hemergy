import Image from "next/image";
import Link from "next/link";

const pages = [
  {
    name: "How it works",
    path: "",
  },
  {
    name: "About",
    path: "",
  },
  {
    name: "Projects",
    path: "",
  },
  {
    name: "For Businesses",
    path: "",
  },

  {
    name: "Get in touch",
    path: "",
  },
];

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="flex-box justify-center gap-6">
        <Image src="/images/f-twitter.svg" alt="icon" width={44} height={44} />
        <Image src="/images/f-medium.svg" alt="icon" width={44} height={44} />
        <Image src="/images/f-in.svg" alt="icon" width={44} height={44} />
      </div>
      <div className="flex-box justify-center flex-wrap gap-8 text-textcolor my-8">
        {pages.map((item, index) => (
          <Link key={index} href={item.path} className="p-sm font-medium text-textcolor">
            {item.name}
          </Link>
        ))}
      </div>
      <p className="footer-text mb-6">© Hemergy. All rights reserved.</p>
      <div className="flex-box justify-center">
        <Image src="/images/logo_cue.svg" alt="icon" width={32} height={32} />
      </div>
    </div>
  );
};

export default Footer;
