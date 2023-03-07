import React from 'react'

import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function LocationSelector() {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Box>
      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
        <IconButton>
          <HelpCenterIcon fontSize='small' />
        </IconButton>
        <Checkbox
          size='small'
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='soil attributes'
        />
        <Typography variant='body1' sx={{ pt: '3px' }}>
          Is your question related to a specific location other than your own?
        </Typography>
      </Stack>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <Typography variant='body1' sx={{ pt: '3px' }}>
          LocationAutocomplete component goes here
        </Typography>
      </Collapse>
    </Box>
  )
}
