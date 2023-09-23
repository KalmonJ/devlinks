export type Link = {
  id: string;
  platform: Platforms;
  link: string;
};

export interface LinkWithoutId extends Omit<Link, "id"> {}

export type Platforms =
  | "GitHub"
  | "Frontend Mentor"
  | "Twitter"
  | "Linkedin"
  | "Youtube"
  | "Facebook"
  | "Twitch"
  | "Dev.to"
  | "Codewars"
  | "Codepen"
  | "FreeCodeCamp"
  | "GitLab"
  | "Hasnode"
  | "Stack Overflow"
  | "";

export type SaveLinks = {
  links: Link[];
  userId: string;
};
