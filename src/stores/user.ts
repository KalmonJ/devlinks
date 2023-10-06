import { User } from "@/features/authentication/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
};

export const userStore = create<UserStore>()(
  persist(
    (set) => ({
      setUser(user) {
        set(() => ({ user }));
      },
      user: null,
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
