"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-[100px] justify-center">
      <Link
        className={`${pathname === "/about" ? "font-bold" : ""}`}
        href="/about"
      >
        ABOUT
      </Link>
      <Link
        className={`${pathname === "/films" ? "font-bold" : ""}`}
        href="/films"
      >
        FILMS
      </Link>
      <Link
        className={`${pathname === "/reservation" ? "font-bold" : ""}`}
        href="/reservation"
      >
        RESERVATION
      </Link>
      <Link className={`${pathname === "/qna" ? "font-bold" : ""}`} href="/qna">
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
