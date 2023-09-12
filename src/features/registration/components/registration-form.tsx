"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Image from "next/image";
import z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const authenticationSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password is too short" }),
    confirmPassword: z.string().min(8, { message: "Password is too short" }),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "The passwords are not the same",
  });

type RegistrationValues = z.infer<typeof authenticationSchema>;

export const RegistrationForm = () => {
  const form = useForm<RegistrationValues>({
    resolver: zodResolver(authenticationSchema),
  });

  const onSubmit = (values: RegistrationValues) => {
    console.log(values, "valores");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  icon={
                    <Image
                      src="/ph_envelope-simple-fill.svg"
                      width={16}
                      height={16}
                      alt="email icon"
                      className="absolute left-3 top-1/2 bottom-1/2 -translate-y-1/2"
                    />
                  }
                  type="email"
                  placeholder="e.g.alex@email.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Create password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  icon={
                    <Image
                      src="/ph_lock-key-fill.svg"
                      width={16}
                      height={16}
                      alt="email icon"
                      className="absolute left-3 top-1/2 bottom-1/2 -translate-y-1/2"
                    />
                  }
                  type="password"
                  placeholder="At least.8 characters"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  icon={
                    <Image
                      src="/ph_lock-key-fill.svg"
                      width={16}
                      height={16}
                      alt="email icon"
                      className="absolute left-3 top-1/2 bottom-1/2 -translate-y-1/2"
                    />
                  }
                  type="password"
                  placeholder="At least.8 characters"
                />
              </FormControl>
              <FormDescription>
                Password must contain at least 8 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create new account</Button>
      </form>
    </Form>
  );
};
