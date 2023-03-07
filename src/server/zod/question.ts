import * as z from "zod"

export const QuestionModel = z.object({
  id: z.string(),
  title: z.string(),
  zone: z.string(),
  body: z.string(),
  permalink: z.string(),
  published: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  tagIDs: z.string().array(),
  authorID: z.string(),
})
