"use client";

import useForm from "@/hooks/useForm";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";

const CreateReservationPage = () => {
  const { values, handleChange } = useForm({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      date: "",
      time: "",
      request: "",
    },
  });

  const { mutate: createReservationMutate } = useMutation({
    mutationFn: async (values) => {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/reservation`,
        values
      );
    },
  });

  return (
    <div className="flex flex-col w-full h-full">
      <p className="flex justify-center items-center w-full h-[100px] bg-slate-100 text-center">
        <span className="text-2xl">예약 페이지</span>
      </p>
      <form
        className="flex flex-col w-full h-full justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          createReservationMutate(values);
        }}
      >
        <div>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">전화번호</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">날짜</label>
          <input
            type="date"
            id="date"
            name="date"
            value={values.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="time">시간</label>
          <input
            type="time"
            id="time"
            name="time"
            value={values.time}
            onChange={handleChange}
          />
          <label htmlFor="request">요청사항</label>
          <input
            type="text"
            id="request"
            name="request"
            value={values.request}
            onChange={handleChange}
          />
        </div>
        <button>예약하기</button>
      </form>
    </div>
  );
};

export default CreateReservationPage;
