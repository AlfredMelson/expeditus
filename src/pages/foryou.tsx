import type { ReactElement } from 'react'

import Stack from '@mui/material/Stack'
import Head from 'next/head'

import { useSession } from 'next-auth/react'

import { PageTitle } from '@modules/common/components'
import { Layout } from '@modules/layout'

import type { NextPageWithLayout } from '@src/types'

export function ForYouContent() {
  const { status } = useSession()

  return (
    <>
      <Head>
        <title>Expeditus</title>
        <meta name='description' content='Expeditus' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {status === 'authenticated' && (
        <Stack direction='column' spacing={2} sx={{ mt: 14 }}>
          <PageTitle titleText='For you' />
        </Stack>
      )}
    </>
  )
}

const ForYou: NextPageWithLayout = () => {
  return <ForYouContent />
}

ForYou.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default ForYou
