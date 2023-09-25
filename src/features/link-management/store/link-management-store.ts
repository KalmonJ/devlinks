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
  removed: boolean;
  setRemoved: (removed: boolean) => void;
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
    removed: false,
    setRemoved(removed) {
      set(() => ({ removed }));
    },
    add(link) {
      set((state) => ({ links: [...state.links, link], removed: true }));
    },
    remove(id: string) {
      set((state) => {
        return {
          links: state.links.filter((link) => link._id !== id),
          removed: true,
        };
      });
    },
    addLink(value, idLink) {
      const links = [...get().links];
      const index = links.findIndex((link) => link._id === idLink);
      links[index].link = value;
      set(() => ({ links }));
    },
    addPlatform(platform, idLink) {
      const links = [...get().links];
      const index = links.findIndex((link) => link._id === idLink);
      links[index].platform = platform;
      set(() => ({ links }));
    },
    addLinks(links) {
      set(() => ({ links }));
    },
  }));
};
