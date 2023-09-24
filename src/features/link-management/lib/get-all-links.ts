import { Link, ResponseLinks } from "../types";

export const getAllLinks = async (userId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/link/${userId}`
  );
  const data: ResponseLinks[] = await response.json();
  return data;
};
