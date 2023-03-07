import * as z from "zod"

export const ViewModel = z.object({
  id: z.string(),
  questionID: z.string(),
  userId: z.string(),
  createdAt: z.date(),
})
