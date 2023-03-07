import React from 'react'

import Box, { type BoxProps } from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

export default function PrimaryContainer({
  left,
  right,
  rightRef,
}: {
  left: React.ReactElement
  right: React.ReactElement
  rightRef?: React.MutableRefObject<HTMLDivElement | null>
  rightSx?: BoxProps['sx']
}) {
  return (
    <Container sx={{ mt: 14 }}>
      <Grid container direction='row' justifyContent='center' alignItems='flex-start'>
        <Grid item md={7} lg={9}>
          {left}
        </Grid>
        <Grid item md={5} lg={3} sx={{ display: 'initial' }}>
          <Box ref={rightRef} aria-hidden='true' sx={{ minWidth: '25vw', ml: 5 }}>
            {right}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
