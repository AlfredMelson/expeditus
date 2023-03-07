import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { publicProcedure, protectedProcedure, router } from '../trpc'
import species from '@src/server/data/genus/species/csvaa2.json'

export type SpeciesCreateManyInput = {
  id?: string
  species: string
  plantID: number
  parentID: number
  genus: string
  family: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export const speciesRouter = router({
  createSpecies: protectedProcedure.mutation(async ({ ctx }) => {
    const newDump = species
    return await ctx.prisma.species.createMany({
      data: newDump,
    })
  }),
  listFamilies: publicProcedure.query(async ({ ctx }) => {
    const { prisma } = ctx

    const dedupFamily = await prisma.species.findMany({
      orderBy: {
        family: 'asc',
      },
      select: {
        family: true,
      },
      distinct: 'family',
    })

    return {
      dedupFamily,
    }
  }),
  filterGenus: publicProcedure
    .input(
      z.object({
        selectedFamily: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { selectedFamily } = input
      const { prisma } = ctx

      const dedupGenus = await prisma.species.findMany({
        where: {
          family: selectedFamily,
        },
        orderBy: {
          genus: 'asc',
        },
        select: {
          genus: true,
        },
        distinct: 'genus',
      })

      return {
        dedupGenus,
      }
    }),
  filterSpecies: publicProcedure
    .input(
      z.object({
        selectedGenus: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { selectedGenus } = input
      const { prisma } = ctx

      const dedupSpecies = await prisma.species.findMany({
        where: {
          genus: selectedGenus,
        },
        orderBy: {
          species: 'asc',
        },
        select: {
          species: true,
        },
        distinct: 'species',
      })

      return {
        dedupSpecies,
      }
    }),
})
