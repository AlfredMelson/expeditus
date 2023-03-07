import * as z from "zod"

export const HardinessModel = z.object({
  id: z.string(),
  zone: z.string(),
  fStart: z.number().int(),
  fEnd: z.number().int(),
  createdAt: z.date(),
})
