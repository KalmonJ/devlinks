import { Link } from "../types";
import { createStore } from "zustand";

export interface CreateLinkManagementStoreProps {
  links: Link[];
}

export interface CreateLinkManagementStore
  extends CreateLinkManagementStoreProps {
  add: (link: Link) => void;
  remove: (id: string) => void;
  addPlatform: (platform: Link["platform"], idLink: string) => void;
  addLink: (value: string, idLink: string) => void;
  addLinks: (links: Link[]) => void;
}

const INITIAL_STATE = {
  links: [],
};

export const createLinkManagementStore = (
  props: CreateLinkManagementStoreProps
) => {
  return createStore<CreateLinkManagementStore>((set, get) => ({
    ...INITIAL_STATE,
    ...props,
    add(link) {
      set((state) => ({ links: [...state.links, link] }));
    },
    remove(id: string) {
      set((state) => {
        return {
          links: state.links.filter((link) => link.id !== id),
        };
      });
    },
    addLink(value, idLink) {
      const links = [...get().links];
      const index = links.findIndex((link) => link.id === idLink);
      links[index].link = value;
      set(() => ({ links }));
    },
    addPlatform(platform, idLink) {
      const links = [...get().links];
      const index = links.findIndex((link) => link.id === idLink);
      links[index].platform = platform;
      set(() => ({ links }));
    },
    addLinks(links) {
      set(() => ({ links }));
    },
  }));
};
