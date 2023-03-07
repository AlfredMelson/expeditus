import React from 'react'

// import ClickAwayListener from '@mui/material/ClickAwayListener'
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { MobileMuiButton } from '../button'

import type { TooltipProps } from '@mui/material/Tooltip'

const TooltipSx = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
    maxWidth: 180,
    fontSize: theme.typography.pxToRem(14),
  },
  [`& .${tooltipClasses.tooltip}`]: {
    pointerEvents: 'none',
    backgroundColor: theme.palette.common.black,
  },
}))

interface IMToolTip {
  title: string
  children: React.ReactElement
}

export default function MToolTip({ title, children }: IMToolTip) {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  // const handleClickAway = () => {
  //   setOpen(false)
  // }

  return (
    <TooltipSx
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      title={
        <React.Fragment>
          <Typography variant='body1'>{title}</Typography>
          <MobileMuiButton buttonVariant='outlined' buttonText='Click' onClick={handleClose} />
        </React.Fragment>
      }>
      {children}
    </TooltipSx>
  )
}
