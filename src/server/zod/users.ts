import * as z from "zod"

export const usersModel = z.object({
  id: z.string(),
  email: z.string(),
  image: z.string(),
  location: z.string(),
  name: z.string(),
  username: z.string(),
  verified: z.boolean(),
  createdAt: z.date(),
})
