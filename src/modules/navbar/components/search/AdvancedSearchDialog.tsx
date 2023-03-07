import React from 'react'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import Popper from '@mui/material/Popper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

export default function AdvancedSearchDialog() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(false)
  }

  return (
    <div>
      <Tooltip title='Advanced Search'>
        <IconButton aria-label='toggle password visibility' onClick={handleClickOpen}>
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </IconButton>
      </Tooltip>
      <Popper open={open} anchorEl={anchorEl} placement='bottom' transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              <Typography
                variant='h2'
                sx={{
                  color: 'rgba(0, 0, 0, 0.87)',
                  fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
                  lineHeight: '1.5',
                  fontWeight: 500,
                  padding: '16px 24px',
                }}
              >
                Advanced Search
              </Typography>
              <Typography
                variant='h2'
                sx={{
                  color: 'rgba(0, 0, 0, 0.6)',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  lineHeight: 1.5,
                }}
              >
                Narrow your search results
              </Typography>
              <Stack direction='column' spacing={1} sx={{ padding: '16px 24px', width: '700px' }}>
                <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                  <Typography noWrap variant='body1' sx={{ width: '140px' }}>
                    Exact phrase
                  </Typography>
                  <TextField autoFocus margin='dense' id='name' type='email' variant='standard' />
                </Stack>
                <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                  <Typography noWrap variant='body1' sx={{ width: '140px' }}>
                    Has words
                  </Typography>
                  <TextField autoFocus margin='dense' id='name' type='email' variant='standard' />
                </Stack>
                <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                  <Typography noWrap variant='body1' sx={{ width: '140px' }}>
                    Exclude words
                  </Typography>
                  <TextField autoFocus margin='dense' id='name' type='email' variant='standard' />
                </Stack>
                <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                  <Typography noWrap variant='body1' sx={{ width: '140px' }}>
                    Website
                  </Typography>
                  <TextField autoFocus margin='dense' id='name' type='email' variant='standard' />
                </Stack>
              </Stack>
              <Stack
                direction='row'
                justifyContent='flex-end'
                alignItems='center'
                spacing={2}
                sx={{ mt: 2 }}
              >
                <Button variant='text' onClick={handleClose}>
                  Clear
                </Button>
                <Button onClick={handleClose}>Search</Button>
              </Stack>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  )
}
