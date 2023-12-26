import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";
import Spacer from "../ui/Spacer";

const Header = () => {
  return (
    <div>
      <Spacer y={20} />
      <section className="flex justify-center">
        <Image src="/images/logo.png" width={300} height={100} alt="logo" />
      </section>
      <Spacer y={20} />
      <NavBar />
    </div>
  );
};

export default Header;
