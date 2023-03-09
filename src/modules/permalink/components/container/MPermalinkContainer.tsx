import Head from 'next/head'

import { MPermalinkQnCard } from '@modules/permalink/components/mobile'
import { MAnswerTabsContainer } from '@modules/permalink/components/mobile-answer'

interface IMPermalinkContainer {
  headTitle?: string
}

export default function MPermalinkContainer({ headTitle = 'title' }: IMPermalinkContainer) {
  return (
    <>
      <Head>
        <title>Expeditus : {headTitle}</title>
        <meta name='description' content='Expeditus' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MPermalinkQnCard />

      <MAnswerTabsContainer />
    </>
  )
}
