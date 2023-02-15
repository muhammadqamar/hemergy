import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobileNav";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  const currentRoute = router.pathname;
  return (
    <>
      <div className="nav-container">
        <div className="main-nav-wrapper">
          <Link href="/" className="nav-logo">
            <Image src="/images/hemergy-logo.svg" alt="hemergy logo" width={150} height={32} />
          </Link>
          <div className="nav-links-box">
            <Link
              href="/how-it-work"
              className={currentRoute === `/how-it-work` ? `nav-link active-link` : `nav-link`}
            >
              How it works
            </Link>
            <Link
              href="/about"
              className={currentRoute === `/about` ? `nav-link active-link` : `nav-link`}
            >
              About
            </Link>
            <Link
              href="/for-investors"
              className={currentRoute === `/for-investors` ? `nav-link active-link` : `nav-link`}
            >
              For Investors
            </Link>
            <Link
              href="/for-business"
              className={currentRoute === `/for-business` ? `nav-link active-link` : `nav-link`}
            >
              For Businesses
            </Link>
            <Link
              href="/contact-us"
              className={currentRoute === `/contact-us` ? `nav-link active-link` : `nav-link`}
            >
              Get in touch
            </Link>
          </div>
          <div className="nav-reginter">
            <Link
              href="/login"
              className={
                currentRoute === `/login`
                  ? `nav-link hidden lg:block active-link`
                  : `nav-link hidden lg:block`
              }
            >
              Sign in
            </Link>

            <Link href="/register" className="btn secondary">
              Get started
            </Link>

            <button className=" lg:hidden block">
              <Image src="/images/menu.svg" alt="" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
      <MobileNav currentRoute={currentRoute} />
    </>
  );
};

export default Navbar;
