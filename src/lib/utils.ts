import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function saveClientCookie(key: string, value: string) {
  document.cookie = `${key}=${value}`;
}

export const cookies = {
  get<T>(key: string): T | null {
    if (!document.cookie.includes("session=")) {
      return null;
    }
    const cookies = document.cookie.replaceAll(/\s/g, "").split(";");
    const cookieStr = cookies.find((cookie) => cookie.startsWith(`${key}=`));
    if (!cookieStr) return null;
    const formattedCookieStr = cookieStr.replace(`${key}=`, "");
    const cookie: T = JSON.parse(formattedCookieStr);
    return cookie;
  },
};
