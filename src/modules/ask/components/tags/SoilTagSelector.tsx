import React from 'react'

import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import FamilyAutocomplete from './FamilyAutocomplete'

export default function SoilTagSelector() {
  const [familyValue, setFamilyValue] = React.useState<string>('')

  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Box>
      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
        <Checkbox
          size='small'
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='soil attributes'
        />
        <Typography variant='body1' sx={{ pt: '3px' }}>
          Will adding soil attributes improve the quality of answers your question will receive?
        </Typography>
        <IconButton>
          <HelpCenterIcon fontSize='medium' />
        </IconButton>
      </Stack>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <FamilyAutocomplete familyValue={familyValue} setFamilyValue={setFamilyValue} />
      </Collapse>
    </Box>
  )
}
