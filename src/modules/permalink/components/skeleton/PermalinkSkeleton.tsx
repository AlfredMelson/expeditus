import React from 'react'

import { useTheme, useMediaQuery } from '@mui/material'

import Card from '@mui/material/Card'

import { PrimaryContainer } from '@modules/common/components/container'
import {
  PermalinkCardBodySkeleton,
  PermalinkCardHeaderSkeleton,
} from '@modules/permalink/components/skeleton'

export default function PermalinkSkeleton() {
  const frame = React.useRef<null | HTMLDivElement>(null)
  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))
  React.useEffect(() => {
    let obs: undefined | MutationObserver
    function suppressTabIndex() {
      if (frame.current && isMdUp) {
        const elements = frame.current.querySelectorAll(
          'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
        )
        elements.forEach(elm => {
          elm.setAttribute('tabindex', '-1')
        })
      }
    }
    if (typeof MutationObserver !== 'undefined' && frame.current) {
      obs = new MutationObserver(suppressTabIndex)
      obs.observe(frame.current, { childList: true, subtree: true })
    }

    return () => {
      if (obs) {
        obs.disconnect()
      }
    }
  }, [isMdUp])

  return (
    <>
      <PrimaryContainer
        left={
          <Card variant='outlined' sx={{ borderStyle: 'none', p: '20px' }}>
            <PermalinkCardHeaderSkeleton />
            <PermalinkCardBodySkeleton />
          </Card>
        }
        rightRef={frame}
        right={<>{isMdUp && <></>}</>}
      />
    </>
  )
}
