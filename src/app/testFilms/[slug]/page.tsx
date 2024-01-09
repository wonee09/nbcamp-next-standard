import { FilmType } from "@/types";
import React from "react";

const FilmsDetailPage = async ({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) => {
  console.log("slug", slug);

  const film = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/films/${slug}`);
  const filmData: FilmType = await film.json();

  console.log("filmData", filmData);

  return (
    <div>
      <div>FilmsDetailPage</div>
      <div></div>
    </div>
  );
};

export default FilmsDetailPage;

export async function generateStaticParams() {
  // 모든 film 정보를 미리 만들어둠(SSG)
  const films = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/films`);
  const filmsData: FilmType[] = await films.json();

  return filmsData.map((film) => ({
    slug: String(film.id),
  }));
}
