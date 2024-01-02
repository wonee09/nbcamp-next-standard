"use client";

import Spacer from "@/components/ui/Spacer";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

type Film = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
};

const FilmsPage = () => {
  const [category, setCategory] = useState("all");

  const {
    data: films,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["films"],
    queryFn: async (): Promise<Film[]> => {
      const response = await axios.get("http://localhost:4000/films");
      const fetchedFilms = response.data;
      return fetchedFilms;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <div className="w-full mx-[60px]">
      <ul className="flex justify-end gap-[20px]">
        <li onClick={() => handleCategory("all")}>ALL</li>
        <li onClick={() => handleCategory("Wedding day")}>Wedding day</li>
        <li onClick={() => handleCategory("Pre-wedding")}>Pre-wedding</li>
        <li onClick={() => handleCategory("Baby")}>Baby</li>
      </ul>
      <Spacer y={40} />
      <section className="flex flex-wrap">
        {films
          ?.filter((film) => film.category === category || category === "all")
          .map((film) => {
            // Next의 Image 컴포넌트를 사용하지 않고 css의 background-image 속성을 사용해
            // 배경 처리를 해줄 수도 있지만 이럴 경우 resizing을 별도로 처리해줘야 하기 때문에
            // 이미지 최적화를 자체적으로 지원하는 Image 컴포넌트를 사용해서 배경 처리를 해주도록 하겠습니다.

            // fill로 설정하면 부모요소의 position이 relative일 때 이미지가 부모 요소만큼 늘어나도록 설정됩니다
            return (
              <div key={film.id} className="w-1/2 h-[230px] p-[5px]">
                <div className="bg-red-100 w-full h-full relative">
                  <Image
                    src={film.imageUrl}
                    alt={film.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default FilmsPage;
