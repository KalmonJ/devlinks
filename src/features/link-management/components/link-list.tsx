"use client";

import { LinkItem } from "./link-item";
import { AddLink } from "./add-link";
import { Button } from "@/components/ui/button";
import { linkManagementStore } from "../store/link-management-store";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { useMutation } from "react-query";
import { saveLinks } from "../lib/save-links";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "@/hooks/useSession";

export const LinkList = () => {
  const links = linkManagementStore((state) => state.links);
  const { config } = useDragAndDrop();
  const { toast } = useToast();
  const session = useSession();
  const { mutate } = useMutation({
    mutationFn: saveLinks,
    onSuccess() {
      toast({
        variant: "success",
        title: "Success",
        description: "links saved successfully.",
      });
    },
  });

  const handleSaveLinks = () =>
    mutate({
      links,
      userId: session?.user.id as string,
    });

  return (
    <div>
      <div className="flex flex-col justify-between px-6 pb-6">
        <AddLink />
        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <LinkItem
              {...{
                link,
                index,
                ...config,
              }}
              id={`draggable-${index}`}
              key={link.id}
            />
          ))}
        </div>
      </div>
      <hr className="bg-borders" />
      <div className="p-4 w-full">
        <Button onClick={handleSaveLinks} className="w-full">
          Save
        </Button>
      </div>
    </div>
  );
};
