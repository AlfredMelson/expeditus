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

const Error500Content = () => {
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
          <Typography variant='h1'>500</Typography>
          <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
            Internal server error 👨🏻‍💻
          </Typography>
          <Typography variant='body2'>Oops, something went wrong!</Typography>
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

const Error500: NextPageWithLayout = () => {
  return <Error500Content />
}

Error500.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Error500
