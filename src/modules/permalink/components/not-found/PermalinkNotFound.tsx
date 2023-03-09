import React from 'react'

import Box, { type BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import Link from 'next/link'

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
}))

interface IPermalinkNotFound {
  headTitle?: string
}

export default function PermalinkNotFound({ headTitle = 'title' }: IPermalinkNotFound) {
  return (
    <>
      <Head>
        <title>Expeditus: {headTitle} question not found</title>
        <meta name='description' content='Expeditus' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Fade in timeout={1500}>
        <Box
          sx={{
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <BoxWrapper>
            <Typography variant='h4'>Page not found</Typography>
            <Typography variant='h5' sx={{ mb: 3 }}>
              We couldn&prime;t find the page you are looking for.
            </Typography>
            <Typography variant='body1' sx={{ mb: 1 }}>
              Try searching for similar questions
            </Typography>
            <Typography variant='body1' sx={{ mb: 1 }}>
              Browse our recent questions
            </Typography>
            <Typography variant='body1' sx={{ mb: 1 }}>
              Browse our popular tags
            </Typography>
            <Typography variant='body1' sx={{ mb: 1 }}>
              If you feel something is missing that should be here, contact us.
            </Typography>
          </BoxWrapper>
          <Link passHref href='/'>
            <Button variant='contained' sx={{ px: 5.5 }}>
              Back to Home
            </Button>
          </Link>
        </Box>
      </Fade>
    </>
  )
}
