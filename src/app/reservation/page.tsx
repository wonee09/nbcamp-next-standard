"use client";

import Spacer from "@/components/ui/Spacer";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

const ReservationPage = () => {
  const router = useRouter();
  const handleNewReservationButtonClick = () => {
    router.push("/reservation/new");
  };
  return (
    <div className="w-full mx-[60px]">
      <div className="text-center">ReservationPage</div>
      <div className="flex justify-end">
        <Button
          onClick={handleNewReservationButtonClick}
          radius="full"
          color="primary"
          variant="ghost"
          className=""
        >
          예약하기
        </Button>
      </div>
      <Spacer y={10} />
      <Card className="w-full">
        <CardBody>hello</CardBody>
      </Card>
      <Spacer y={10} />
    </div>
  );
};

export default ReservationPage;
