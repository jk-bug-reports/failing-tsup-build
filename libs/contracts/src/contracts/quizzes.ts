import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { ApiExceptionResponse, ID, PaginationQuerySchema } from "../constants";
import { QuizInputDtoSchema, QuizDtoSchema } from "./quizzes.schema";

const c = initContract();
const pathParams = z.object({
  quizId: ID,
});

export const quizzes = c.router(
  {
    createQuiz: {
      method: "POST",
      path: "",
      summary: "Create a new quiz",
      body: QuizInputDtoSchema,
      responses: {
        201: QuizDtoSchema,
        401: ApiExceptionResponse,
        500: ApiExceptionResponse,
      },
    },
    getQuiz: {
      method: "GET",
      path: "/:quizId",
      summary: "Get a quiz by id",
      pathParams: pathParams,
      responses: {
        200: QuizDtoSchema,
        404: ApiExceptionResponse,
      },
    },
    getManyQuizzes: {
      method: "GET",
      path: "",
      summary: "Get many quizzes",
      query: PaginationQuerySchema,
      responses: {
        200: z.array(QuizDtoSchema),
      },
    },
    updateQuiz: {
      method: "PUT",
      path: "/:quizId",
      summary: "Update a quiz",
      pathParams: pathParams,
      body: QuizInputDtoSchema,
      responses: {
        204: null,
        401: ApiExceptionResponse,
        403: ApiExceptionResponse,
        404: ApiExceptionResponse,
      },
    },
    deleteQuiz: {
      method: "DELETE",
      path: "/:quizId",
      summary: "Delete a quiz",
      pathParams: pathParams,
      body: null,
      responses: {
        204: null,
        401: ApiExceptionResponse,
        403: ApiExceptionResponse,
        404: ApiExceptionResponse,
      },
    },
  },
  {
    pathPrefix: "/quizzes",
    strictStatusCodes: true,
  },
);
