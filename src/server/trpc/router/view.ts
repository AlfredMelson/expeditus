/* eslint-disable */
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { protectedProcedure, router } from '../trpc'

export const viewRouter = router({
  addQuestionView: protectedProcedure
    .input(z.object({ questionID: z.string(), userId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { prisma } = ctx
      const { questionID, userId } = input

      const questionViewed = prisma.view.findFirst({
        where: {
          userId: userId,
          questionID: questionID,
        },
      })

      if (await questionViewed) return null

      return await prisma.view.create({
        data: {
          userId: userId,
          questionID: questionID,
        },
      })
    }),
})
