"use client";

import { Button, Input } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const NewReservationPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const { mutate: createReservationMutate } = useMutation({
    mutationFn: async ({
      email,
      name,
      password,
      passwordAgain,
    }: {
      email: string;
      name: string;
      password: string;
      passwordAgain: string;
    }) => {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/reservation`, {
        email,
        name,
        password,
        passwordAgain,
      });
    },
  });

  const handleCreateReservation = () => {
    createReservationMutate({
      email,
      name,
      password,
      passwordAgain,
    });
  };

  return (
    <form
      className="flex flex-col gap-[10px] w-full items-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateReservation();
      }}
    >
      <Input
        className="w-[400px]"
        type="email"
        label="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <Input
        className="w-[400px]"
        type="text"
        label="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <Input
        className="w-[400px]"
        type="password"
        label="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <Input
        className="w-[400px]"
        type="password"
        label="Password-Again"
        onChange={(e) => {
          setPasswordAgain(e.target.value);
        }}
        value={passwordAgain}
      />
      <Button type="submit" className="w-[400px]" color="primary">
        등록
      </Button>
    </form>
  );
};

export default NewReservationPage;
