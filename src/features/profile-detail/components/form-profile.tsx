"use client";
/* eslint-disable jsx-a11y/alt-text */
import { Input } from "@/components/ui/input";
import { Image } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useMutation } from "react-query";

export const FormProfile = () => {
  return (
    <form>
      <div className="flex flex-col p-6 gap-6">
        <div className="bg-light-grey p-5 flex flex-col justify-between rounded-xl">
          <span className="text-base mb-4 text-grey font-normal">
            Profile picture
          </span>
          <label className="relative flex cursor-pointer rounded-xl w-[193px] h-[193px] bg-light-purple">
            <Input type="file" className="border sr-only" />
            <div className="flex flex-col gap-2 w-full items-center justify-center">
              <Image className="text-purple h-10 w-10" />
              <span className="text-center text-purple text-base font-semibold">
                + Upload Image
              </span>
            </div>
          </label>
          <span className="text-grey mt-6 text-xs">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </span>
        </div>
        <div className="bg-light-grey flex flex-col gap-3 justify-between p-5 rounded-xl">
          <div className="flex flex-col gap-1">
            <Label className="font-normal">First name*</Label>
            <Input required placeholder="Ben" />
          </div>
          <div className="flex flex-col gap-1">
            <Label className="font-normal">Last name*</Label>
            <Input required placeholder="Wright" />
          </div>
          <div className="flex flex-col gap-1">
            <Label className="font-normal">Email</Label>
            <Input placeholder="ben@example.com" type="email" />
          </div>
        </div>
      </div>
      <hr className="bg-borders" />
      <div className="p-4 w-full">
        <Button type="submit" className="w-full">
          Save
        </Button>
      </div>
    </form>
  );
};
