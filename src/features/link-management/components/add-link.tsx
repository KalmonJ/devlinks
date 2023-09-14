"use client";

import { Button } from "@/components/ui/button";
import { linkManagementStore } from "../store/link-management-store";
import { v4 } from "uuid";

export const AddLink = () => {
  const add = linkManagementStore((state) => state.add);

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
