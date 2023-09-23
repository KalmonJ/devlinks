"use client";

import { Button } from "@/components/ui/button";
import { v4 } from "uuid";
import { useLinksManagementStoreContext } from "../hooks/useLinksManagementStoreContext";

export const AddLink = () => {
  const { add } = useLinksManagementStoreContext();

  return (
    <Button
      onClick={() => {
        add({ id: v4(), platform: "", link: "" });
      }}
      className="mt-10 mb-6 font-semibold"
      variant="outline"
      type="button"
    >
      + Add new link
    </Button>
  );
};
