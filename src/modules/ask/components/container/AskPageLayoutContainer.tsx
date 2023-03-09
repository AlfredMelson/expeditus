import React from 'react'

import { useTheme, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'

import { AskPromptFormContainer } from '@modules/ask/components/container'
import {
  DraftQuestionAccordion,
  MoreLinksButton,
  SavedPrompts,
} from '@modules/ask/components/sidebar'
import { PrimaryContainer } from '@modules/common/components/container'

export default function AskPageLayoutContainer() {
  const frame = React.useRef<null | HTMLDivElement>(null)
  const theme = useTheme()
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))
  React.useEffect(() => {
    let obs: undefined | MutationObserver
    function suppressTabIndex() {
      if (frame.current && isSmUp) {
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
  }, [isSmUp])

  return (
    <PrimaryContainer
      left={<AskPromptFormContainer />}
      rightRef={frame}
      right={
        <Box
          sx={{
            width: '25%',
            position: 'fixed',
          }}>
          <>
            {isSmUp && (
              <>
                <SavedPrompts />
                <DraftQuestionAccordion />
                <MoreLinksButton />
              </>
            )}
          </>
        </Box>
      }
    />
  )
}
