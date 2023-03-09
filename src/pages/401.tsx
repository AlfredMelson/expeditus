import type { ReactElement } from 'react'

import Box, { type BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Head from 'next/head'

import Link from 'next/link'

import { Layout } from '@modules/layout'

import type { NextPageWithLayout } from '@src/types'

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
}))

export function Error401Content() {
  return (
    <>
      <Head>
        <title>Expeditus</title>
        <meta name='description' content='Expeditus' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        sx={{
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
        <BoxWrapper>
          <Typography variant='h1'>401</Typography>
          <Typography variant='h5' sx={{ mb: 1 }}>
            You are not authorized! 🔐
          </Typography>
          <Typography variant='body2'>
            You don&prime;t have permission to access this page.
          </Typography>
        </BoxWrapper>
        <Link href='/'>
          <Button variant='contained' sx={{ px: 5.5 }}>
            Back to Home
          </Button>
        </Link>
      </Box>
    </>
  )
}

const Error401: NextPageWithLayout = () => {
  return <Error401Content />
}

Error401.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Error401
