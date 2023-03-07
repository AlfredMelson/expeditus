import * as z from "zod"

export const WatchModel = z.object({
  id: z.string(),
  answerID: z.string().nullish(),
  questionID: z.string().nullish(),
  userId: z.string(),
  createdAt: z.date(),
})
