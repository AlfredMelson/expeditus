/* eslint-disable */
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { protectedProcedure, router } from '../trpc'

export const wikiDataRouter = router({
  createWikiData: protectedProcedure
    .input(
      z.object({
        pageid: z.number(),
        title: z.string(),
        extract: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { pageid, title, extract } = input
      const wikibase_item = 'Q'

      const wikiData = await ctx.prisma.wikiData.findFirst({
        where: {
          pageid,
        },
      })

      if (wikiData) return null

      return await ctx.prisma.wikiData.create({
        data: {
          pageid,
          title,
          extract,
          wikibase_item,
        },
      })
    }),
  addWikiBase: protectedProcedure
    .input(z.object({ pageid: z.number(), wikibase_item: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { pageid, wikibase_item } = input

      const wikiData = await ctx.prisma.wikiData.findFirst({
        where: {
          pageid,
        },
        select: {
          id: true,
        },
      })

      if (!wikiData) {
        throw new TRPCError({
          code: 'NOT_FOUND',
        })
      }

      return await ctx.prisma.wikiData.update({
        where: {
          id: wikiData.id,
        },
        data: {
          wikibase_item,
        },
      })
    }),
})
