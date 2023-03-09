import type { ReactElement } from 'react'

import Stack from '@mui/material/Stack'
import Head from 'next/head'

import { PageTitle } from '@modules/common/components'
import { FollowingTabs } from '@modules/following/components'
import { Layout } from '@modules/layout'

import type { NextPageWithLayout } from '@src/types'

export function FollowingContent() {
  return (
    <>
      <Head>
        <title>Expeditus</title>
        <meta name='description' content='Expeditus' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' sx={{ mt: 14 }}>
        <PageTitle titleText='Following' />
        <FollowingTabs />
      </Stack>
    </>
  )
}

const Following: NextPageWithLayout = () => {
  return <FollowingContent />
}

Following.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Following
