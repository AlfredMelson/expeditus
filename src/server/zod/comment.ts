import * as z from "zod"

export const CommentModel = z.object({
  id: z.string(),
  body: z.string(),
  published: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  answerID: z.string(),
  parentID: z.string(),
  authorID: z.string(),
})
