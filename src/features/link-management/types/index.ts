export type Link = {
  _id: string;
  platform: Platforms;
  link: string;
};

export interface LinkWithoutId extends Omit<Link, "_id"> {}

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
  links: LinkWithoutId[];
  userId: string;
};

export type ResponseLinks = {
  user: string;
  links: Link[];
  _id: string;
};
