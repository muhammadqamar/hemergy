import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div className="nav-container">
      <div className="main-nav-wrapper">
        <div className="nav-logo">
          <Image src="/images/hemergy-logo.svg" alt="hemergy logo" width={150} height={32} />
        </div>
        <div className="nav-links-box">
          <Link
            href="/how-it-work"
            className={currentRoute === `/how-it-work` ? `nav-link active-link` : `nav-link`}
          >
            How it works
          </Link>
          <Link href="" className="nav-link">
            About
          </Link>
          <Link href="" className="nav-link">
            For Investors
          </Link>
          <Link href="" className="nav-link">
            For Businesses
          </Link>
          <Link href="" className="nav-link">
            Get in touch
          </Link>
        </div>
        <div className="nav-reginter">
          <Link href="" className="nav-link">
            Sign in
          </Link>

          <Link href="/register" className="btn secondary">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
