import React from 'react'

import { useRouter } from 'next/router'

export type LoadingContextActions = {
  progress: number
}

export const LoadingContext = React.createContext({} as LoadingContextActions)

interface ILoadingProvider {
  children: React.ReactNode
}

// zod

const LoadingProvider = ({ children }: ILoadingProvider) => {
  const router = useRouter()
  const [progress, setProgress] = React.useState<number>(100)

  React.useEffect(() => {
    const handleStart = () => {
      setProgress(0)
    }

    const handleStop = () => {
      setProgress(100)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <LoadingContext.Provider
      value={{
        progress,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

const useLoading = (): LoadingContextActions => {
  const context = React.useContext(LoadingContext)

  if (!context) {
    throw new Error('useLoading must be used within an LoadingProvider')
  }

  return context
}

export { LoadingProvider, useLoading }
