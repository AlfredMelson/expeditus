import * as z from "zod"

export const AnswerModel = z.object({
  id: z.string(),
  body: z.string(),
  published: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  questionID: z.string(),
  authorID: z.string(),
})
