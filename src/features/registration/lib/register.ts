import { Register } from "../types";

export const register = async (credentials: Register) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};
