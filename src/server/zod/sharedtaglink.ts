import * as z from "zod"

export const SharedTagLinkModel = z.object({
  id: z.string(),
  url: z.string(),
  slug: z.string(),
  createdAt: z.date(),
  profileID: z.string().nullish(),
  tagID: z.string(),
})
