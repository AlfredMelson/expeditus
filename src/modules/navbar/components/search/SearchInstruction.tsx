import React from 'react'

import CellTowerIcon from '@mui/icons-material/CellTower'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Popper from '@mui/material/Popper'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { MuiButton } from '@modules/common/components/button'
import { useClickOutside } from '@modules/navbar/hooks'

interface ISearchInstruction {
  children: React.ReactNode
}

export default function SearchInstruction({ children }: ISearchInstruction) {
  const theme = useTheme()
  const [searchInstruction, setSearchInstruction] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const ref = React.useRef(null)

  const handleClickOutside = () => {
    setSearchInstruction(false)
  }

  const handleClickInside = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setSearchInstruction(true)
  }

  useClickOutside(ref, handleClickOutside)

  return (
    <>
      <Box sx={{ position: 'relative' }} ref={ref} onClick={handleClickInside}>
        {children}
      </Box>
      <Popper open={searchInstruction} anchorEl={anchorEl} placement='bottom' transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              sx={{
                marginTop: -0.2,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                borderWidth: '1px 0 0 0',
                borderStyle: 'dashed',
                borderColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.mode === 'dark' ? '#3C4043' : '#F1F3F4',
                p: '8px 16px 12px',
                [theme.breakpoints.only('md')]: {
                  width: '490px',
                },
                [theme.breakpoints.only('lg')]: {
                  width: '580px',
                },
                [theme.breakpoints.only('xl')]: {
                  width: '642px',
                },
              }}>
              <Stack direction='column' justifyContent='flex-start' sx={{ mt: 2 }}>
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  sx={{ mb: 1 }}>
                  <Box sx={{ ml: 1, width: '100%' }}>
                    <Typography variant='body1'>
                      <span style={{ marginRight: '6px', fontWeight: 'bold' }}>[tag]</span>
                      search within a tag
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 1, width: '100%' }}>
                    <Typography variant='body1'>
                      <span style={{ marginRight: '6px', fontWeight: 'bold' }}>user:1234</span>
                      search by gardener
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  sx={{ mb: 1 }}>
                  <Box sx={{ ml: 1, width: '100%' }}>
                    <Typography variant='body1'>
                      <span style={{ marginRight: '6px', fontWeight: 'bold' }}>"words here"</span>
                      exact phrase
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 1, width: '100%' }}>
                    <Typography variant='body1'>
                      <span style={{ marginRight: '6px', fontWeight: 'bold' }}>
                        collective:"Name"
                      </span>
                      scollective content
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  sx={{ mb: 1 }}>
                  <Box sx={{ ml: 1, width: '100%' }}>
                    <Typography variant='body1'>
                      <span style={{ marginRight: '6px', fontWeight: 'bold' }}>answers:0</span>
                      unanswered questions
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 1, width: '100%' }}>
                    <Typography variant='body1'>
                      <span style={{ marginRight: '6px', fontWeight: 'bold' }}>score:3</span>
                      posts with a 3+ score
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                  <Box sx={{ ml: 1, width: '100%' }}>
                    <Typography variant='body1'>
                      <span style={{ marginRight: '6px', fontWeight: 'bold' }}>is:question</span>
                      type of post
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 1, width: '100%' }}>
                    <Typography variant='body1'>
                      <span style={{ marginRight: '6px', fontWeight: 'bold' }}>isaccepted:yes</span>
                      search within status
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{ mt: 2, mx: 1 }}>
                <MuiButton
                  buttonVariant='text'
                  buttonText='Prompt AI'
                  buttonLink='/ask'
                  startIcon={<CellTowerIcon />}
                />
                <MuiButton buttonVariant='text' buttonText='Search Help' buttonLink={'/'} />
              </Stack>
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  )
}
