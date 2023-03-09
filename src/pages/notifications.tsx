import type { ReactElement } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Head from 'next/head'

import { Layout } from '@modules/layout'

import type { NextPageWithLayout } from '@src/types'

const NotificationsContent = () => {
  return (
    <>
      <Head>
        <title>Expeditus | Notifications</title>
      </Head>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8,
        }}>
        <Container maxWidth='lg'>
          <Typography sx={{ mb: 3 }} variant='h4'>
            Notifications
          </Typography>
        </Container>
      </Box>
    </>
  )
}

const Notifications: NextPageWithLayout = () => {
  return <NotificationsContent />
}

Notifications.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Notifications
