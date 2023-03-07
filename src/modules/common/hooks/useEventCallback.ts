import React from 'react'

import { useIsomorphicLayoutEffect } from '@modules/common/hooks'

const useEventCallback = <Args extends unknown[], R>(fn: (...args: Args) => R) => {
  const ref = React.useRef<typeof fn>(() => {
    throw new Error('Cannot call an event handler while rendering.')
  })

  useIsomorphicLayoutEffect(() => {
    ref.current = fn
  }, [fn])

  return React.useCallback((...args: Args) => ref.current(...args), [ref])
}

// A wrapper for "JSON.parse()"" to support "undefined" value
export function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '')
  } catch {
    console.log('parsing error on', { value })

    return undefined
  }
}

export default useEventCallback
