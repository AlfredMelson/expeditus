import { type SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

interface IPermalinkTitleSkeleton {
  containerSx?: SxProps
}

export default function PermalinkTitleSkeleton({ containerSx }: IPermalinkTitleSkeleton) {
  return (
    <Box sx={containerSx}>
      <Skeleton variant='text' sx={{ fontSize: '30px' }} />
    </Box>
  )
}
