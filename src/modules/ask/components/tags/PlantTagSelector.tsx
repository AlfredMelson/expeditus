import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'

import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function PlantTagSelector() {
  return (
    <Box>
      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
        <Checkbox size='small' aria-label='plant family, genus, or specific species' />
        <Typography variant='body1' sx={{ pt: '3px' }}>
          Is your question related to a plant family, genus, or specific species?
        </Typography>
        <IconButton>
          <HelpCenterIcon fontSize='medium' />
        </IconButton>
      </Stack>
    </Box>
  )
}
