"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  console.log("====================================");
  console.log(pathname);
  console.log("====================================");

  const getActiveMenu = (path: string) =>
    `${pathname === path ? "font-bold" : ""}`;

  return (
    <nav className="flex gap-[100px] justify-center">
      <Link className={getActiveMenu("/about")} href="/about">
        ABOUT
      </Link>
      <Link className={getActiveMenu("/films")} href="/films">
        FILMS
      </Link>
      <Link className={getActiveMenu("/reservation")} href="/reservation">
        RESERVATION
      </Link>
      <Link className={getActiveMenu("/qna")} href="/qna">
        QnA
      </Link>
      <div className="flex gap-[20px]">
        <Image
          alt="instagram_logo"
          src="/images/instagram_logo.png"
          width={20}
          height={20}
        />
        <Image
          alt="facebook_logo"
          src="/images/facebook_logo.png"
          width={20}
          height={20}
        />
      </div>
    </nav>
  );
};

export default NavBar;
