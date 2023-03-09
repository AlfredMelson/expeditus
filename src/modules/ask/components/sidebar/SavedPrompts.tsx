import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete'
import FolderIcon from '@mui/icons-material/Folder'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Collapse from '@mui/material/Collapse'
import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { MuiExpandButton } from '@modules/common/components/button'

export default function SavedPrompts() {
  const [cardExpansion, setCardExpansion] = React.useState<boolean>(false)

  const handleCardExpansion = () => {
    setCardExpansion(!cardExpansion)
  }

  return (
    <Fade in timeout={1500}>
      <Card
        sx={{
          px: 2,
          py: 1,
          mb: 1,
          maxWidth: 360,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
        }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <MuiExpandButton
            onClick={handleCardExpansion}
            buttonVariant='text'
            buttonFontSize={15}
            buttonText='Saved and unpublished questions'
          />
          <IconButton onClick={handleCardExpansion}>
            {cardExpansion ? <FolderOpenIcon /> : <FolderIcon />}
          </IconButton>
        </Stack>

        <Collapse in={cardExpansion} timeout='auto' unmountOnExit>
          <Box sx={{ my: 1 }}>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='flex-start'
              spacing={2}
              sx={{ mb: 1 }}>
              <Typography variant='body1'>
                How do you stack a mugo pine in a high wind enviroment?
              </Typography>
              <Typography variant='body1'>11/11/22</Typography>
              <Tooltip title='Delete'>
                <IconButton>
                  <DeleteIcon fontSize='small' />
                </IconButton>
              </Tooltip>
            </Stack>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='flex-start'
              spacing={2}
              sx={{ mb: 1 }}>
              <Typography variant='body1'>
                What soil amendments are recommended when transplanting a five year old baltic pine?
              </Typography>
              <Typography variant='body1'>10/11/22</Typography>
              <Tooltip title='Delete'>
                <IconButton>
                  <DeleteIcon fontSize='small' />
                </IconButton>
              </Tooltip>
            </Stack>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='flex-start'
              spacing={2}>
              <Typography variant='body1'>
                How much should you water 1 year old apple tree?
              </Typography>
              <Typography variant='body1'>8/11/22</Typography>
              <Tooltip title='Delete'>
                <IconButton>
                  <DeleteIcon fontSize='small' />
                </IconButton>
              </Tooltip>
            </Stack>
          </Box>
        </Collapse>
      </Card>
    </Fade>
  )
}
