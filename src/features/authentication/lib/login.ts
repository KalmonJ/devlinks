import { Login } from "../types";

export const login = async (credentials: Login) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();
  return data;
};
