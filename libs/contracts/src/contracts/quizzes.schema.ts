import { z } from "zod";
import { extendZodWithOpenApi } from "@anatine/zod-openapi";
import { ID, inputFieldsToOmit } from "../constants";

extendZodWithOpenApi(z);

export const QuizDtoSchema = z.object({
  id: ID,
  name: z
    .string()
    .trim()
    .min(1, "Quiz name must have at least 1 character(s)")
    .max(60, "Quiz name must have at most 60 character(s)"),
  authorId: z.string().uuid(),
});

export const QuizInputDtoSchema = QuizDtoSchema.omit(inputFieldsToOmit);
export const QuizUpdateDtoSchema = QuizDtoSchema.omit(inputFieldsToOmit);

export type TQuizDto = z.infer<typeof QuizDtoSchema>;
export type TQuizInputDto = z.infer<typeof QuizInputDtoSchema>;
export type TQuizUpdateDto = z.infer<typeof QuizUpdateDtoSchema>;
