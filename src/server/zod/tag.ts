import * as z from "zod"

export const TagModel = z.object({
  id: z.string(),
  name: z.string(),
  questionIDs: z.string().array(),
})
