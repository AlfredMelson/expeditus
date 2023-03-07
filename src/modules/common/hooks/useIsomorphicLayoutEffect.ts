import { useEffect, useLayoutEffect } from 'react'

// Switches between useEffect and useLayoutEffect following the execution environment
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
