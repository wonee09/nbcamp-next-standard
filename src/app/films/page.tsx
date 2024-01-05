"use client";

import Spacer from "@/components/ui/Spacer";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFilms } from "@/services/films";
import Image from "next/image";

type Film = {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  videoUrl: string;
  isDeleted: boolean;
};

const FilmsPage = () => {
  const [category, setCategory] = useState("ALL");
  const {
    data: films,
    isLoading,
    isError,
  } = useQuery<Film[]>({
    queryKey: ["films"],
    queryFn: getFilms,
  });

  if (isLoading) {
    return <div>로딩중입니다...!</div>;
  }

  if (isError) {
    return <div>오류가 발생하였습니다...!</div>;
  }

  const filteredFilms = films?.filter((f) => {
    return category === "ALL" ? true : f.category === category;
  });

  return (
    <div className="w-full mx-[60px]">
      <ul className="flex justify-end gap-[20px]">
        <li
          className="cursor-pointer"
          onClick={() => {
            setCategory("ALL");
          }}
        >
          ALL
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setCategory("Wedding day");
          }}
        >
          Wedding day
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setCategory("Pre-wedding");
          }}
        >
          Pre-wedding
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setCategory("Baby");
          }}
        >
          Baby
        </li>
      </ul>
      <Spacer y={40} />
      {Number(filteredFilms?.length) > 0 ? (
        <section className="flex justify-center flex-wrap">
          {filteredFilms?.map((film) => {
            return (
              <div className="w-1/2 h-[230px] p-[5px]" key={film.id}>
                <div className="bg-red-100 w-full h-full relative">
                  <Image
                    src={film.imageUrl}
                    alt={film.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        "ㅠㅠ"
      )}
    </div>
  );
};

export default FilmsPage;
