"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Form,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "react-query";
import { login } from "../lib/login";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import z from "zod";

const authenticationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password is too short" }),
});

type AuthenticationValues = z.infer<typeof authenticationSchema>;

export const AuthenticationForm = () => {
  const form = useForm<AuthenticationValues>({
    resolver: zodResolver(authenticationSchema),
  });

  const { toast } = useToast();
  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationFn: login,
  });

  const onSubmit = (values: AuthenticationValues) =>
    mutate(values, {
      onSuccess() {
        toast({
          variant: "default",
          title: "Success",
          description: "login successful.",
        });

        push("/management");
      },

      onError() {
        toast({
          variant: "destructive",
          title: "Error",
          description:
            "invalid credentials, check your email and password and try again.",
          action: <ToastAction altText="error">I understand</ToastAction>,
        });
      },
    });

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
                  type="password"
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
