import axios from "axios";

export const getFilms = async () => {
  const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}/films`);
  return response.data;
};
