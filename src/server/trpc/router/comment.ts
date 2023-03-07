import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { router, publicProcedure, protectedProcedure } from '@src/server/trpc/trpc'

export const commentRouter = router({
  addComment: protectedProcedure
    .input(
      z.object({
        body: z.string(),
        questionID: z.string(),
        parentID: z.string().optional(),
        userId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const parentID = input.parentID || null
      // link user profile from session
      const userProfile = await ctx.prisma.profile.findUnique({
        where: {
          userId: input.userId,
        },
      })

      if (!userProfile) return null

      try {
        const comment = await ctx.prisma.comment.create({
          data: {
            body: input.body,
            answer: {
              connect: {
                questionID: input.questionID,
              },
            },
            author: {
              connect: {
                id: userProfile.id,
              },
            },
            ...(parentID && {
              parent: {
                connect: {
                  id: parentID,
                },
              },
            }),
          },
        })

        return comment
      } catch (e) {
        console.log(e)

        throw new TRPCError({
          code: 'BAD_REQUEST',
        })
      }
    }),
  allComments: publicProcedure
    .input(
      z.object({
        questionID: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      try {
        const comments = ctx.prisma.comment.findMany({
          where: {
            answer: {
              questionID: input.questionID,
            },
          },
          include: {
            author: true,
          },
        })

        return comments
      } catch (e) {
        console.log(e)
        throw new TRPCError({
          code: 'BAD_REQUEST',
        })
      }
    }),
})
