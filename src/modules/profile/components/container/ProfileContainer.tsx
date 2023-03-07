import React from 'react'

import { useMediaQuery } from '@mui/material'

import { useTheme } from '@mui/material/styles'

import { ProfileTabs } from '@modules/profile/components/sidebar'

export default function ProfileContainer() {
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
      <ProfileTabs />
    </>
  )
}
