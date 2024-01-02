import React from "react";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Provider;
