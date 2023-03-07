import * as z from "zod"

export const UsefulQnModel = z.object({
  id: z.string(),
  questionID: z.string(),
  userId: z.string(),
  createdAt: z.date(),
})
