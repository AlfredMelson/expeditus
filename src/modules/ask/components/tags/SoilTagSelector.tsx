import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function SoilTagSelector() {
  return (
    <Box>
      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
        <Checkbox size='small' aria-label='soil attributes' />
        <Typography variant='body1' sx={{ pt: '3px' }}>
          Will adding soil attributes improve the quality of answers your question will receive?
        </Typography>
        <IconButton>
          <HelpCenterIcon fontSize='medium' />
        </IconButton>
      </Stack>
    </Box>
  )
}
