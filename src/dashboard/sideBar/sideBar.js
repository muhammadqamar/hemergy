import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const SideBar = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="flex-box flex-row laptop:flex-col side-nav-bar">
      <Link href="/">
        <Image src="/images/logo_cue.svg" alt="logo" width={32} height={32} />
      </Link>
      <div className="flex-box flex-row laptop:flex-col gap-4 ">
        <Link
          href="/projects"
          className={currentRoute === "/projects" ? "menu-item active" : "menu-item"}
        >
          <Image src="/images/monitoring.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link
          href="/checkout"
          className={currentRoute === "/checkout" ? "menu-item active" : "menu-item"}
        >
          <Image src="/images/apps.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link
          href="/portfolio"
          className={currentRoute === "/portfolio" ? "menu-item active" : "menu-item"}
        >
          <Image src="/images/hemergy.svg" alt="logo" width={20} height={20} />
        </Link>
      </div>
      <div className="flex-box flex-row laptop:flex-col gap-4">
        <Link href="" className="menu-item hide-links">
          <Image src="/images/twitter.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link href="" className="menu-item hide-links">
          <Image src="/images/medium.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link
          href="/contact"
          className={
            currentRoute === "/contact" ? "menu-item hide-links active" : "menu-item hide-links"
          }
        >
          <Image src="/images/help.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link
          href="/profile"
          className={
            currentRoute === "/profile" ? "dash-user-img insite-border " : "dash-user-img "
          }
        >
          <img src="/images/user.png" alt="logo" />
        </Link>
        <button className="menu-item hide-links">
          <Image src="/images/logout.svg" alt="logo" width={20} height={20} />
        </button>
        <button
          onClick={() => {
            if (menu === false) {
              setMenu(true);
            } else {
              setMenu(false);
            }
          }}
          className=" laptop:hidden block"
        >
          <Image
            src={menu === true ? "/images/close.svg" : "/images/menu.svg"}
            alt=""
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className={`mobile-side-box  ${menu === true ? `block` : ` hidden`}`}>
        <Link href="" className="mobile-dash-links">
          <Image src="/images/twitter.svg" alt="logo" width={20} height={20} />
          <span className="p-sm text-weight-medium text-white">Twitter</span>
        </Link>
        <Link href="" className="mobile-dash-links">
          <Image src="/images/medium.svg" alt="logo" width={20} height={20} />
          <span className="p-sm text-weight-medium text-white">Medium</span>
        </Link>
        <Link href="" className="mobile-dash-links">
          <Image src="/images/help.svg" alt="logo" width={20} height={20} />
          <span className="p-sm text-weight-medium text-white">Help</span>
        </Link>
        <Link href="" className="mobile-dash-links">
          <Image src="/images/logout.svg" alt="logo" width={20} height={20} />
          <span className="p-sm text-weight-medium text-white">Sign out</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
