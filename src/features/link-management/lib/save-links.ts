import { SaveLinks } from "../types";

export const saveLinks = async (input: SaveLinks): Promise<void> => {
  input.links = input.links.map((link) => ({
    link: link.link,
    platform: link.platform,
  }));

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/link`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
};
