import React from 'react'

import { useTheme, useMediaQuery } from '@mui/material'
import Head from 'next/head'

import { PrimaryContainer } from '@modules/common/components/container'
import { PermalinkCard } from '@modules/permalink/components/card'
import { QuestionInfoAccordion, MoreLinksButton } from '@modules/permalink/components/sidebar'

interface IPermalinkContainer {
  headTitle?: string
}

export default function PermalinkContainer({ headTitle = 'title' }: IPermalinkContainer) {
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
      <Head>
        <title>Expeditus : {headTitle}</title>
        <meta name='description' content='Expeditus' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PrimaryContainer
        left={<PermalinkCard />}
        rightRef={frame}
        right={
          <>
            {isMdUp && (
              <>
                <QuestionInfoAccordion />
                <MoreLinksButton />
              </>
            )}
          </>
        }
      />
    </>
  )
}
