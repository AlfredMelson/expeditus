import React from 'react'

import { useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

import { AskQuestionSidebar, SortQuestionPreview } from '@modules/ask/components/sidebar'
import { PageTitle } from '@modules/common/components'
import { PrimaryContainer } from '@modules/common/components/container'
import { PromptSort } from '@modules/prompts/components/tabbed-sort'

export default function PromptsContainer() {
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
    <>
      <PrimaryContainer
        left={
          <>
            <PageTitle titleText='Community Prompts' sx={{ ml: 1 }} />
            <PromptSort />
          </>
        }
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
                  <AskQuestionSidebar />
                  <SortQuestionPreview />
                </>
              )}
            </>
          </Box>
        }
      />
    </>
  )
}
