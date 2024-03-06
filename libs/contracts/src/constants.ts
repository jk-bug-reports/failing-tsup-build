import { z } from "zod";
import { extendZodWithOpenApi } from "@anatine/zod-openapi";

extendZodWithOpenApi(z);

export const inputFieldsToOmit = { id: true, authorId: true } as const;
export const ITEMS_PER_PAGE = 8;

export const ID = z.string().uuid();
export type TID = z.infer<typeof ID>;

export const ApiExceptionResponse = z.object({
  message: z.string(),
});

export const PaginationQuerySchema = z.object({
  /**
   * @type {number} The page number. Pages indexing starts from 1, not 0.
   */
  page: z.coerce.number().min(1).default(1).openapi({
    description: "The page number. Pages indexing starts from 1, not 0.",
  }),
  /**
   * @type {number} How many results will be returned per page.
   */
  size: z.coerce.number().optional().default(ITEMS_PER_PAGE).openapi({
    description: "How many results will be returned per page.",
  }),
});
