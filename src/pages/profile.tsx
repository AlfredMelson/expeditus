import type { ReactElement } from 'react'

import Head from 'next/head'

import { Layout } from '@modules/layout'
import { ProfileContainer } from '@modules/profile/components/container'

import type { NextPageWithLayout } from '@src/types'

export function ProfileContent() {
  return (
    <>
      <Head>
        <title>Expeditus</title>
        <meta name='description' content='Expeditus' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProfileContainer />
    </>
  )
}

const Profile: NextPageWithLayout = () => {
  return <ProfileContent />
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Profile
