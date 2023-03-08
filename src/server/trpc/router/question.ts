import { z } from 'zod'

import { router, publicProcedure, protectedProcedure } from '@src/server/trpc/trpc'

/*
 * https://github.com/greidinger-reis/tabnews-clone/blob/main/prisma/schema.prisma
 */

const getPermaLink = (title: string) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const questionRouter = router({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).optional(),
        cursor: z.string().optional(), // <-- "cursor" needs to exist, but can be any type
        recents: z.boolean().optional(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { cursor, recents } = input
      const limit = input.limit ?? 3
      const items = await ctx.prisma.question.findMany({
        take: limit + 1, // get an extra item at the end which we'll use as next cursor
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: recents // if recents is true, order by createdAt
          ? {
              createdAt: 'desc',
            }
          : undefined,
        include: {
          tags: {
            select: {
              name: true,
            },
          },
          author: {
            select: {
              username: true,
              location: true,
              image: true,
              createdAt: true,
              userId: true,
            },
          },
          _count: {
            select: {
              views: true,
              watching: true,
            },
          },
        },
      })

      let nextCursor: typeof cursor | undefined = undefined

      if (items.length > limit) {
        const nextItem = items.pop()
        nextCursor = nextItem?.id
      }

      return {
        items,
        nextCursor,
      }
    }),
  findByPermalink: publicProcedure
    .input(z.object({ permalink: z.string() }))
    .query(({ ctx, input }) => {
      const { permalink } = input
      const { prisma } = ctx
      const permalinkQuestion = prisma.question.findUnique({
        where: {
          permalink: permalink,
        },
        include: {
          tags: {
            select: {
              name: true,
            },
          },
          author: {
            select: {
              id: true,
              username: true,
              location: true,
              image: true,
              createdAt: true,
            },
          },
        },
      })
      return permalinkQuestion
    }),
})

// addQuestion: protectedProcedure
//     .input(
//       z.object({
//         title: z.string(),
//         zone: z.string(),
//         body: z.string(),
//         tags: z.string().array(),
//       }),
//     )
//     .mutation(async ({ ctx, input }) => {
//       const { prisma, session } = ctx
//       const { body, title, zone } = input
//       const userId = session.user.id

//       const permalink = getPermaLink(title)

//       const published = true

//       const tagIDs: string[] = ['javascript', 'react', 'typescript']

//       return await prisma.question.create({
//         data: {
//           title,
//           zone,
//           body,
//           permalink,
//           published,
//           tagIDs,
//           author: {
//             connect: {
//               id: userId,
//             },
//           },
//         },
//       })
//     }),
