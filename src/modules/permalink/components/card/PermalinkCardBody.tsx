import { alpha } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function PermalinkCardBody() {
  return (
    <Box
      sx={theme => ({
        borderTop: '1px solid',
        borderColor: alpha(theme.palette.primary.main, 0.1),
        mt: '20px',
        pt: '10px',
      })}>
      <Typography variant='body1' sx={{ color: 'text.secondary' }}>
        Question Body
      </Typography>
    </Box>
  )
}
