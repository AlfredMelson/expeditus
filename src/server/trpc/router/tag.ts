import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { router, publicProcedure, protectedProcedure } from '@src/server/trpc/trpc'

export const tagRouter = router({
  findByQuestionId: publicProcedure
    .input(
      z.object({
        questionID: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      try {
        const tags = ctx.prisma.tag.findMany({
          where: {
            question: {
              some: {
                id: input.questionID,
              },
            },
          },
        })

        return tags
      } catch (e) {
        console.log(e)
        throw new TRPCError({
          code: 'BAD_REQUEST',
        })
      }
    }),
})
