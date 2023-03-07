import * as z from "zod"

export const ProfileModel = z.object({
  id: z.string(),
  email: z.string().nullish(),
  image: z.string(),
  location: z.string(),
  firstName: z.string(),
  middleName: z.string().nullish(),
  lastName: z.string(),
  suffixName: z.string().nullish(),
  username: z.string().nullish(),
  bio: z.string().nullish(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
