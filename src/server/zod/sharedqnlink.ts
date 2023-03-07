import * as z from "zod"

export const SharedQnLinkModel = z.object({
  id: z.string(),
  url: z.string(),
  slug: z.string(),
  createdAt: z.date(),
  userId: z.string(),
  profileID: z.string().nullish(),
  questionID: z.string(),
})
