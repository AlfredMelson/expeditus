import { CacheProvider } from '@emotion/react'

import CssBaseline from '@mui/material/CssBaseline'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'

import { RecoilRoot } from 'recoil'

import { LoadingProvider } from '@modules/layout/context'
import { AppThemeProvider, createEmotionCache } from '@src/styles'

import { trpc } from '@src/utils/trpc'

import type { ExtendedAppProps, NextPageWithLayout } from '@src/types'

// client-side cache, shared for user session in the browser.
const clientSideEmotionCache = createEmotionCache()

interface AppPropsWithLayout extends ExtendedAppProps {
  Component: NextPageWithLayout
}

const Expeditus = (props: AppPropsWithLayout) => {
  const { Component, emotionCache = clientSideEmotionCache, session, pageProps } = props

  const router = useRouter()

  const queryClient = new QueryClient()

  const getLayout = Component.getLayout || (page => page)

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={emotionCache}>
          <LoadingProvider>
            <AppThemeProvider>
              <SessionProvider session={session}>
                <CssBaseline />
                {getLayout(<Component key={router.asPath} {...pageProps} />)}
              </SessionProvider>
            </AppThemeProvider>
          </LoadingProvider>
        </CacheProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

// add 'withTRPC()' HOC
export default trpc.withTRPC(Expeditus)
