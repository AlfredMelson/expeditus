import * as z from "zod"

export const IgnoreModel = z.object({
  id: z.string(),
  snubbedID: z.string(),
  snubID: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
