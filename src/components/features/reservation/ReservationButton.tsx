"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ReservationButton = () => {
  const router = useRouter();
  const handleReservationButtonClick = () => {
    router.push("/reservation/create");
  };
  return (
    <button
      onClick={handleReservationButtonClick}
      className="border px-4 py-2 rounded-full"
    >
      예약하기
    </button>
  );
};

export default ReservationButton;
