import { FilmType } from "@/types";
import Image from "next/image";
import Link from "next/link";

const FilmsPage = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/films`);
  const films: FilmType[] = await response.json();

  return (
    <div className="w-full mx-[60px]">
      {Number(films?.length) <= 0 ? (
        <div>정보가 존재하지 않습니다..!</div>
      ) : (
        <section className="flex justify-center flex-wrap">
          {films?.map((film) => {
            return (
              <div className="w-1/2 h-[230px] p-[5px]" key={film.id}>
                <div className="bg-red-100 w-full h-full relative">
                  <Link href={`/testFilms/${film.id}`}>
                    <Image src={film.imageUrl} alt={film.name} fill priority />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default FilmsPage;
