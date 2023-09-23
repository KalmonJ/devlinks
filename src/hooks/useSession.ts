import { LoginResponse } from "@/features/authentication/types";
import { cookies } from "@/lib/utils";

export const useSession = () => {
  const cookie = cookies.get<LoginResponse>("session");
  if (!cookie) return null;
  return cookie.session;
};
