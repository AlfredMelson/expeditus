import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function LocationSelector() {
  return (
    <Box>
      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
        <IconButton>
          <HelpCenterIcon fontSize='small' />
        </IconButton>
        <Checkbox size='small' aria-label='soil attributes' />
        <Typography variant='body1' sx={{ pt: '3px' }}>
          Is your question related to a specific location other than your own?
        </Typography>
      </Stack>
    </Box>
  )
}
