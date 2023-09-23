import React from "react";
import { LinksContext } from "../context";
import { useStore } from "zustand";

export const useLinksManagementStoreContext = () => {
  const context = React.useContext(LinksContext);
  if (!context) throw new Error("Missing LinksProvider in the tree.");
  return useStore(context);
};
