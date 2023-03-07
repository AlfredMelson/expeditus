import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { router, protectedProcedure, publicProcedure } from '@src/server/trpc/trpc'

export const profileRouter = router({
  findProfileByUserID: publicProcedure
    .input(
      z.object({
        userId: z.string().optional(),
      }),
    )
    .query(({ ctx, input }) => {
      const { prisma } = ctx
      const profile = prisma.profile.findUnique({
        where: {
          userId: input.userId,
        },
      })

      if (!profile) {
        throw new TRPCError({
          code: 'NOT_FOUND',
        })
      }

      return profile
    }),
})
