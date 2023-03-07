import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { protectedProcedure, router } from '../trpc'

export const likeRouter = router({
  addAnswerLike: protectedProcedure
    .input(z.object({ answerID: z.string(), userId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const like = await ctx.prisma.like.findFirst({
        where: {
          userId: input.userId,
          answerID: input.answerID,
        },
      })

      if (like) return null

      return await ctx.prisma.like.create({
        data: {
          userId: input.userId,
          answerID: input.answerID,
        },
      })
    }),
  addCommentLike: protectedProcedure
    .input(z.object({ commentID: z.string(), userId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const like = await ctx.prisma.like.findFirst({
        where: {
          userId: input.userId,
          commentID: input.commentID,
        },
      })

      if (like) return null

      return await ctx.prisma.like.create({
        data: {
          userId: input.userId,
          commentID: input.commentID,
        },
      })
    }),
  addQuestionLike: protectedProcedure
    .input(z.object({ questionID: z.string(), userId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const like = await ctx.prisma.like.findFirst({
        where: {
          userId: input.userId,
          questionID: input.questionID,
        },
      })

      if (like) return null

      return await ctx.prisma.like.create({
        data: {
          userId: input.userId,
          questionID: input.questionID,
        },
      })
    }),
  removeAnswerLike: protectedProcedure
    .input(z.object({ answerID: z.string(), userId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const like = await ctx.prisma.like.findFirst({
        where: {
          userId: input.userId,
          answerID: input.answerID,
        },
      })

      if (!like) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Like not found',
        })
      }

      return await ctx.prisma.like.delete({
        where: {
          id: like.id,
        },
      })
    }),
  removeCommentLike: protectedProcedure
    .input(z.object({ commentID: z.string(), userId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const like = await ctx.prisma.like.findFirst({
        where: {
          userId: input.userId,
          commentID: input.commentID,
        },
      })

      if (!like) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Like not found',
        })
      }

      return await ctx.prisma.like.delete({
        where: {
          id: like.id,
        },
      })
    }),
  removeQuestionLike: protectedProcedure
    .input(z.object({ questionID: z.string(), userId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const like = await ctx.prisma.like.findFirst({
        where: {
          userId: input.userId,
          questionID: input.questionID,
        },
      })

      if (!like) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Like not found',
        })
      }

      return await ctx.prisma.like.delete({
        where: {
          id: like.id,
        },
      })
    }),
})
