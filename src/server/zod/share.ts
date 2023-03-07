import * as z from "zod"

export const ShareModel = z.object({
  id: z.string(),
  answerID: z.string().nullish(),
  questionID: z.string().nullish(),
  distributorID: z.string(),
  createdAt: z.date(),
})
