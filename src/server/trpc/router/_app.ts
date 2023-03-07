import { authRouter } from '@src/server/trpc/router/authRouter'
import { likeRouter } from '@src/server/trpc/router/like'
import { profileRouter } from '@src/server/trpc/router/profile'
import { questionRouter } from '@src/server/trpc/router/question'
import { router } from '@src/server/trpc/trpc'
import { sharedQnLinkRouter } from '@src/server/trpc/router/sharedQnLink'
import { usefulQnRouter } from '@src/server/trpc/router/usefulQn'
import { tagRouter } from '@src/server/trpc/router/tag'
import { wikiDataRouter } from '@src/server/trpc/router/wikiData'
import { viewRouter } from '@src/server/trpc/router/view'
import { watchRouter } from '@src/server/trpc/router/watch'
import { speciesRouter } from '@src/server/trpc/router/species'

// main app router
export const appRouter = router({
  auth: authRouter,
  like: likeRouter,
  profile: profileRouter,
  question: questionRouter,
  sharedQnLink: sharedQnLinkRouter,
  species: speciesRouter,
  tag: tagRouter,
  usefulQn: usefulQnRouter,
  view: viewRouter,
  watch: watchRouter,
  wikiData: wikiDataRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
