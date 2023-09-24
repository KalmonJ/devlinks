import "server-only";

import { cookies } from "next/headers";
import { Session } from "@/features/authentication/types";

export const getServerSession = (): Session | null => {
  const cookieSession = cookies().get("session")?.value;
  if (!cookieSession) return null;
  const { session }: { session: Session } = JSON.parse(cookieSession ?? "{}");
  return session;
};
