"use client";

import Spacer from "@/components/ui/Spacer";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const FilmsPage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const response = await axios.get("http://localhost:4000/films");
      const fetchedFilms = response.data;

      setFilms(fetchedFilms);
    };

    fetchFilms();
  }, []);

  useEffect(() => {
    console.log("films", films);
  }, [films]);

  return (
    <div className="w-full">
      <ul className="flex justify-end gap-[20px] mr-[60px]">
        <li>ALL</li>
        <li>Wedding day</li>
        <li>Pre-wedding</li>
        <li>Baby</li>
      </ul>
      <Spacer y={40} />
      <section className="flex justify-center">리스트가 보여지는 부분</section>
    </div>
  );
};

export default FilmsPage;
