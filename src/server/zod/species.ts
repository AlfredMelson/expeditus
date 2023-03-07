import * as z from "zod"

export const SpeciesModel = z.object({
  id: z.string(),
  species: z.string(),
  plantID: z.number().int(),
  parentID: z.number().int(),
  genus: z.string(),
  family: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
