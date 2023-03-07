import { alpha } from '@mui/material'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

export default function PermalinkCardBodySkeleton() {
  return (
    <Box
      sx={theme => ({
        borderTop: '1px solid',
        borderColor: alpha(theme.palette.primary.main, 0.1),
        mt: '20px',
        pt: '10px',
      })}
    >
      <Skeleton variant='text' sx={{ fontSize: '20px' }} />
      <Skeleton variant='text' sx={{ fontSize: '20px' }} />
      <Skeleton variant='text' sx={{ fontSize: '20px' }} />
    </Box>
  )
}
