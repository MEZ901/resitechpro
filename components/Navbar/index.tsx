import Image from "next/image";
import Link from "next/link";
import React from "react";
import DarkModeSwitcher from "../Header/DarkModeSwitcher";
import CTA from "./CTA";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link className="inline-block" href="/">
            <Image
              className="hidden dark:block"
              src={"/images/logo/logo-white-transparent.png"}
              alt="Logo"
              width={176}
              height={32}
            />
            <Image
              className="dark:hidden"
              src={"/images/logo/logo-black-transparent.png"}
              alt="Logo"
              width={176}
              height={32}
            />
          </Link>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
          </ul>
          <CTA />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
