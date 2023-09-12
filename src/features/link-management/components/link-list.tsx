"use client";

import { LinkItem } from "./link-item";
import { AddLink } from "./add-link";
import { Button } from "@/components/ui/button";
import { linkManagementStore } from "../store/link-management-store";

export const LinkList = () => {
  const links = linkManagementStore((state) => state.links);

  return (
    <div>
      <div className="flex flex-col justify-between px-6 pb-6">
        <AddLink />
        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <LinkItem index={index} key={link.id} {...link} />
          ))}
        </div>
      </div>
      <hr className="bg-borders" />
      <div className="p-4 w-full">
        <Button className="w-full">Save</Button>
      </div>
    </div>
  );
};
