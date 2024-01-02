import axios from "axios";

export const getReservations = async () => {
  const response = await axios(
    `${process.env.NEXT_PUBLIC_API_URL}/reservation`
  );
  return response.data;
};

export const getReservation = async (id: string) => {
  const response = await axios(
    `${process.env.NEXT_PUBLIC_API_URL}/reservation/${id}`
  );
  return response.data;
};

export const createReservation = async (data: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/reservation`,
    data
  );
  return response.data;
};
