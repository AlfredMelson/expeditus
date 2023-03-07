/* eslint-disable */
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { protectedProcedure, router } from '../trpc'

export const usefulQnRouter = router({
  queryIsQnUseful: protectedProcedure
    .input(z.object({ questionID: z.string(), userId: z.string() }))
    .query(async ({ input, ctx }) => {
      const { prisma } = ctx
      const { questionID, userId } = input

      const isQnUseful = await prisma.usefulQn.findFirst({
        where: {
          userId: userId,
          questionID: questionID,
        },
      })

      if (isQnUseful) return true

      return false
    }),

  addIsQnUseful: protectedProcedure
    .input(z.object({ questionID: z.string(), userId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { prisma } = ctx
      const { questionID, userId } = input

      const isQnUseful = prisma.usefulQn.findFirst({
        where: {
          userId: userId,
          questionID: questionID,
        },
      })

      if (await isQnUseful) return null

      return await prisma.usefulQn.create({
        data: {
          userId: userId,
          questionID: questionID,
        },
      })
    }),
  removeIsQnUseful: protectedProcedure
    .input(z.object({ questionID: z.string(), userId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { prisma } = ctx
      const { questionID, userId } = input
      const IsQnUseful = await prisma.usefulQn.findFirst({
        where: {
          userId: userId,
          questionID: questionID,
        },
      })

      if (!IsQnUseful) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'UsefulQn not found',
        })
      }

      return await prisma.usefulQn.delete({
        where: {
          id: IsQnUseful.id,
        },
      })
    }),
})
