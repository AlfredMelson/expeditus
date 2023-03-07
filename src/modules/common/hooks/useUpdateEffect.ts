import React from 'react'

import { useFirstToRender } from '@modules/common/hooks'

// React hook that return a boolean
// - True at the mount time
// - Then always false

export default function useUpdateEffect(effect: React.EffectCallback, deps?: React.DependencyList) {
  const isFirst = useFirstToRender()

  React.useEffect(() => {
    if (!isFirst) {
      return effect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
