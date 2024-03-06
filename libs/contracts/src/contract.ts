import { initContract } from "@ts-rest/core";
import { profiles } from "./contracts/profiles";
import { quizzes } from "./contracts/quizzes";

const c = initContract();

export const contract = c.router({
  profiles,
  quizzes,
});
