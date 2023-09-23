import { Link, SaveLinks } from "../types";

export const saveLinks = async (input: SaveLinks): Promise<void> => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/link`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
};
