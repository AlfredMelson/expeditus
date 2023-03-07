import * as React from 'react'

import CloseIcon from '@mui/icons-material/Close'
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { useSetRecoilState } from 'recoil'

import { useElementSize } from '@modules/navbar/hooks'
import { accountDrawerVisabilityAtom } from '@modules/navbar/recoil'

export default function MCommunityDrawer() {
  const setAccountDrawerVisability = useSetRecoilState(accountDrawerVisabilityAtom)
  const [state, setState] = React.useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState(open)
    setAccountDrawerVisability(open)
  }

  const [squareRef, { width }] = useElementSize()

  return (
    <>
      <IconButton size='large' onClick={toggleDrawer(true)} sx={{ ml: 1 }}>
        <SatelliteAltIcon fontSize='medium' />
      </IconButton>
      <Drawer
        ref={squareRef}
        anchor='left'
        elevation={0}
        open={state}
        onClose={toggleDrawer(false)}
        sx={theme => ({
          minWidth: '300px',
          maxWidth: '70%',
          right: 'auto',
          '& .MuiDrawer-paper': {
            background: theme.palette.background.default,
          },
        })}>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{ height: '58px', width: { width }, px: 2 }}>
          <Typography variant='h5'>Communities</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon fontSize='medium' />
          </IconButton>
        </Stack>
        <Divider variant='fullWidth' />
      </Drawer>
    </>
  )
}
