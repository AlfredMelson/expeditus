import z from 'zod'
import { router, protectedProcedure } from '@src/server/trpc/trpc'

export const sharedQnLinkRouter = router({
  createSharedLink: protectedProcedure
    .input(
      z.object({
        url: z.string(),
        slug: z.string(),
        questionID: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { prisma, session } = ctx
      const { url, slug, questionID } = input
      const userId = session.user.id

      return await prisma.sharedQnLink.create({
        data: {
          url: url,
          slug: slug,
          userId: userId,
          question: {
            connect: {
              id: questionID,
            },
          },
        },
      })
    }),
})
