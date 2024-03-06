import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { UserProfileSchema } from "./profiles.schema";

const c = initContract();

export const profiles = c.router(
  {
    getUserProfile: {
      method: "GET",
      path: "/profiles/user",
      responses: {
        200: UserProfileSchema,
        401: z.object({
          message: z.string(),
        }),
      },
      summary: "Get user profile",
    },
  },
  {
    strictStatusCodes: true,
  },
);
