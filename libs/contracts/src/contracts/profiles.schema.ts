import { z } from "zod";

export const UserProfileSchema = z.object({
  userId: z.string(),
  username: z.string().nullable(),
  email: z.string(),
  gravatarHash: z.string(),
  doesGravatarExists: z.boolean(),
});

export type TUserProfile = z.infer<typeof UserProfileSchema>;
