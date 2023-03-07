import * as z from "zod"

export const WikiDataModel = z.object({
  id: z.string(),
  pageid: z.number().int(),
  title: z.string(),
  extract: z.string(),
  wikibase_item: z.string().nullish(),
  createdAt: z.date(),
})
