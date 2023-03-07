import * as z from "zod"

export const sessionsModel = z.object({
  id: z.string(),
  expires: z.date(),
  sessionToken: z.string(),
  userId: z.string(),
})
