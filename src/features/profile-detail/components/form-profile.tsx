"use client";
/* eslint-disable jsx-a11y/alt-text */
import { Input } from "@/components/ui/input";
import { Image as IconImage } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserProfileValues, userProfileSchema } from "../schema";
import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
} from "@/components/ui/form";
import Image from "next/image";
import { updateProfile } from "../lib/update-profile";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userStore } from "@/stores/user";
import { useEffect, useState } from "react";

export const FormProfile = () => {
  const { setUser, user } = userStore();
  const [isClient, setIsClient] = useState<boolean>(false);
  const [fileImage, setFileImage] = useState<FileList | null>();

  const validateSizeImage = (file: FileList | null | undefined) =>
    file && file[0].size > 10485760;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const hasError = validateSizeImage(fileImage) ?? false;

  const form = useForm<UserProfileValues>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      email: user?.email,
      firstName: user?.firstName ?? "",
      lastName: user?.lastName ?? "",
      image: user?.image ?? "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onSuccess(data) {
      setUser(data);
    },
  });

  if (!isClient) {
    return null;
  }

  const onSubmit = (values: UserProfileValues) =>
    mutate({ _id: user!._id, ...values, image: fileImage as FileList });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col p-6 gap-6">
          <div className="bg-light-grey p-5 flex flex-col justify-between rounded-xl">
            <span className="text-base mb-4 text-grey font-normal">
              Profile picture
            </span>
            <label
              role="figure"
              className="relative flex cursor-pointer rounded-xl w-[193px] h-[193px] bg-light-purple"
            >
              <Input
                onChange={(ev) => {
                  setFileImage(ev.target.files);
                }}
                type="file"
                accept="image/png, image/jpeg"
                className="border sr-only"
              />

              {fileImage && fileImage.length && (
                <Image
                  fill
                  priority
                  alt={fileImage[0].name}
                  src={URL.createObjectURL(fileImage[0])}
                  className="rounded-xl"
                />
              )}

              {user && user.image && !fileImage && (
                <Image
                  src={form.getValues("image") ?? ""}
                  fill
                  placeholder="empty"
                  priority
                  className="rounded-xl"
                  alt="user profile image"
                />
              )}

              {user && user.image && !fileImage && (
                <div className="absolute w-full h-full bg-overlay justify-center rounded-xl  flex items-center gap-1 flex-col top-1/2 -translate-y-2/4">
                  <IconImage className="text-white" />
                  <span className="text-white font-semibold text-base">
                    Change Image
                  </span>
                </div>
              )}

              {!user?.image && (
                <div className="flex flex-col gap-2 w-full items-center justify-center">
                  <IconImage className="text-purple h-10 w-10" />
                  <span className="text-center text-purple text-base font-semibold">
                    + Upload Image
                  </span>
                </div>
              )}
            </label>

            {validateSizeImage(fileImage) && (
              <span className="text-red-500 text-xs">
                insert an image that is up to 10 mb
              </span>
            )}

            <span className="text-grey mt-6 text-xs">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </span>
          </div>
          <div className="bg-light-grey flex flex-col gap-3 justify-between p-5 rounded-xl">
            <FormField
              name="firstName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name*</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Ben" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="lastName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name*</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Write" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="email@email.com" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <hr className="bg-borders" />
        <div className="p-4 w-full">
          <Button type="submit" disabled={hasError} className="w-full">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};
