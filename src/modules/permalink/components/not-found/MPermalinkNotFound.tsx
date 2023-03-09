import React from 'react'

import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import Link from 'next/link'

interface IMPermalinkNotFound {
  headTitle?: string
}

export default function MPermalinkNotFound({ headTitle = 'title' }: IMPermalinkNotFound) {
  return (
    <>
      <Head>
        <title>Expeditus: {headTitle} question not found</title>
        <meta name='description' content='Expeditus' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Fade in timeout={1000}>
        <Stack
          direction='column'
          alignItems='center'
          justifyContent='center'
          spacing={2}
          sx={{
            height: '100vh',
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            backgroundColor: 'background.paper',
          }}>
          <Typography variant='h4'>Page not found</Typography>
          <Typography variant='h5'>We couldn&prime;t find the page you are looking for.</Typography>
          <Button LinkComponent={Link} href='/' variant='outlined'>
            Search similar questions
          </Button>
          <Button LinkComponent={Link} href='/' variant='outlined'>
            Browse recent questions
          </Button>
          <Button LinkComponent={Link} href='/' variant='outlined'>
            Browse popular tags
          </Button>
          <Button LinkComponent={Link} href='/' variant='outlined'>
            Back to Home
          </Button>
        </Stack>
      </Fade>
    </>
  )
}
