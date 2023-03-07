import * as z from "zod"

export const accountsModel = z.object({
  id: z.string(),
  access_token: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  scope: z.string(),
  token_type: z.string(),
  type: z.string(),
  userId: z.string(),
})
