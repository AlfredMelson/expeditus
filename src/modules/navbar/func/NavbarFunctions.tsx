import React from 'react'

import { alpha, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Slide from '@mui/material/Slide'
import useScrollTrigger from '@mui/material/useScrollTrigger'

interface Props {
  children: React.ReactElement
}
export function ElevationScroll(props: Props) {
  const theme = useTheme()
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 62,
  })
  const slideTrigger = useScrollTrigger({
    threshold: 350,
  })

  return React.cloneElement(
    <Slide appear={false} direction='down' in={!slideTrigger}>
      {children}
    </Slide>,
    {
      elevation: trigger ? 1 : 0,
      sx: {
        transition: 'all 0.3s ease-in-out',
        backdropFilter: trigger ? 'saturate(180%) blur(20px)' : 'none',
        background: trigger ? 'rgba(0,0,0,0.72)' : '#000',
        borderBottomWidth: !trigger ? '1px' : 0,
        borderBottomStyle: !trigger ? 'solid' : 'none',
        borderBottomColor: !trigger ? alpha(theme.palette.primary.main, 0.2) : 'transparent',
      },
    },
  )
}

export function ScrollTop(props: Props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 62,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    )

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role='presentation'>
        {children}
      </Box>
    </Fade>
  )
}
