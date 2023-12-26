import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex gap-[100px] justify-center">
      <Link href="/about">ABOUT</Link>
      <Link href="/films">FILMS</Link>
      <Link href="/reservation">RESERVATION</Link>
      <Link href="/qna">QnA</Link>
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
