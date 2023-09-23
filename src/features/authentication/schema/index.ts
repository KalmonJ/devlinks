import z from "zod";

export const authenticationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password is too short" }),
});
