import type { ReactElement } from 'react'

import Head from 'next/head'

import { AskPageLayoutContainer } from '@modules/ask/components/container'

import { Layout } from '@modules/layout'

import type { NextPageWithLayout } from '@src/types'

export function AskContent() {
  return (
    <>
      <Head>
        <title>Expeditus</title>
        <meta name='description' content='Expeditus' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AskPageLayoutContainer />
    </>
  )
}

const Ask: NextPageWithLayout = () => {
  return <AskContent />
}

Ask.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Ask
