import z from "zod";

export const userProfileSchema = z.object({
  image: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),
});

export type UserProfileValues = z.infer<typeof userProfileSchema>;
