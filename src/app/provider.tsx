"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <NextUIProvider>{children}</NextUIProvider>
    </QueryClientProvider>
  );
};

export default Provider;
