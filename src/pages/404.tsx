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

const Error404Content = () => {
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
          <Typography variant='h1'>404</Typography>
          <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
            Page Not Found ⚠️
          </Typography>
          <Typography variant='body2'>
            We couldn&prime;t find the page you are looking for.
          </Typography>
        </BoxWrapper>
        <Link passHref href='/'>
          <Button variant='contained' sx={{ px: 5.5 }}>
            Back to Home
          </Button>
        </Link>
      </Box>
    </>
  )
}

const Error404: NextPageWithLayout = () => {
  return <Error404Content />
}

Error404.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Error404
