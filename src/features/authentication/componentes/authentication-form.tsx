"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/features/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/features/components/ui/input";
import Image from "next/image";
import z from "zod";
import { Button } from "@/features/components/ui/button";

const authenticationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password is too short" }),
});

type AuthenticationValues = z.infer<typeof authenticationSchema>;

export const AuthenticationForm = () => {
  const form = useForm<AuthenticationValues>({
    resolver: zodResolver(authenticationSchema),
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6">
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
              <FormLabel>Password</FormLabel>
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
                  placeholder="Enter your password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};
