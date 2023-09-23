"use client";

import React from "react";
import {
  CreateLinkManagementStoreProps,
  createLinkManagementStore,
} from "./store/link-management-store";

export const LinksContext = React.createContext<null | ReturnType<
  typeof createLinkManagementStore
>>(null);

interface LinkProviderProps
  extends React.PropsWithChildren<CreateLinkManagementStoreProps> {}

export const LinksProvider = (props: LinkProviderProps) => {
  const storeRef = React.useRef(createLinkManagementStore(props));

  return (
    <LinksContext.Provider value={storeRef.current}>
      {props.children}
    </LinksContext.Provider>
  );
};
