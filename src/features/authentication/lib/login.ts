import { Login, LoginResponse } from "../types";

export const login = async (credentials: Login): Promise<LoginResponse> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data: LoginResponse = await response.json();
  return data;
};
