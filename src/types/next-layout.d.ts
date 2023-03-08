import type { EmotionCache } from '@emotion/react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'

export type ExtendedPageProps = {
  requiresAuth?: boolean
  layout?: React.Component
}

// extend AppProps with EmotionCache
export type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
  session: Session | null
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
