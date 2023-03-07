import * as z from "zod"

export const LikeModel = z.object({
  id: z.string(),
  answerID: z.string().nullish(),
  commentID: z.string().nullish(),
  questionID: z.string().nullish(),
  userId: z.string(),
  createdAt: z.date(),
})
