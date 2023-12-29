import React from "react";
import Spacer from "../ui/Spacer";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <Spacer y={40} />
      <p>BUSINESS NO. 999-99-99999 | TEL 010-1111-2222</p>
      <Spacer y={15} />
      <p className="text-xs">COPYRIGHT© SONNETFILM ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
