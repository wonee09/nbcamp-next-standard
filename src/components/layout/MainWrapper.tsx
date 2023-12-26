import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainWrapper = ({ children }: Props) => {
  return (
    <main className="bg-[#f4e8ee] m-[10px]">
      <div className="flex justify-center bg-white mx-4 my-8 py-[60px]">
        {children}
      </div>
    </main>
  );
};

export default MainWrapper;
