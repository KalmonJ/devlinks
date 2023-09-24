"use client";

import { Equal, Link } from "lucide-react";
import { platforms } from "../constants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Platforms, Link as TypeLink } from "../types";

import { forwardRef, HTMLAttributes } from "react";
import { useLinksManagementStoreContext } from "../hooks/useLinksManagementStoreContext";

interface LinkItemProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
  link: TypeLink;
}

export const LinkItem = forwardRef<HTMLDivElement, LinkItemProps>(
  (props: LinkItemProps, ref) => {
    const { addPlatform, remove, addLink } = useLinksManagementStoreContext();

    return (
      <div
        className="p-5 flex cursor-move flex-col gap-3 rounded-xl bg-light-grey"
        data-index={props.index}
        ref={ref}
        {...props}
        role="button"
      >
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <Equal className="text-grey" />
            <span className="text-base text-grey font-bold">
              Link #{props.index + 1}
            </span>
          </div>
          <span
            role="button"
            onClick={() => {
              remove(props.link._id);
            }}
            className="text-grey font-normal text-base"
          >
            Remove
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <Label>Platform</Label>
          <Select
            defaultValue={props.link.platform}
            onValueChange={(value: Platforms) => {
              addPlatform(value, props.link._id);
            }}
          >
            <SelectTrigger className="w-full px-4 py-3 text-base text-grey">
              <SelectValue placeholder="Select a platform" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {platforms.map((platform, index) => (
                <div key={index}>
                  <SelectItem key={index} value={platform.name}>
                    <div className="flex items-center gap-3">
                      {platform.logo}
                      <p className="text-base text-grey">{platform.name}</p>
                    </div>
                  </SelectItem>
                  <SelectSeparator />
                </div>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <Label>Link</Label>
          <Input
            icon={
              <Link
                width={16}
                height={16}
                className="absolute text-grey left-3 top-1/2 bottom-1/2 -translate-y-1/2"
              />
            }
            onChange={(e) => addLink(e.target.value, props.link._id)}
            placeholder="e.g. https://www.github.com/johnappleseed"
            defaultValue={props.link.link}
          />
        </div>
      </div>
    );
  }
);

LinkItem.displayName = "LinkItem";
