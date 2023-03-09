import React from 'react'

import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

interface ILocationDataDialog {
  label: string
}

export default function LocationDataDialog({ label }: ILocationDataDialog) {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Chip label={label} variant='outlined' onClick={handleClickOpen} />
      <Dialog
        open={open}
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'>
        <DialogTitle>{label}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Learn more</Button>
          <Button onClick={handleClose}>Follow</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
