/* eslint-disable */
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { protectedProcedure, router } from '../trpc'

export const watchRouter = router({
  addWatchQuestion: protectedProcedure
    .input(z.object({ questionID: z.string(), userId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { prisma } = ctx
      const { questionID, userId } = input

      const watchQuestion = prisma.watch.findFirst({
        where: {
          userId: userId,
          questionID: questionID,
        },
      })

      if (await watchQuestion) return null

      return await prisma.watch.create({
        data: {
          userId: userId,
          questionID: questionID,
        },
      })
    }),
})
