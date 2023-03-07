import { type SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

interface IPageTitle {
  titleText: string
  subTitleText?: string
  sx?: SxProps
}

export default function PageTitle({ titleText, subTitleText, sx }: IPageTitle) {
  return (
    <Box sx={sx}>
      <Typography component='h2' variant='h5'>
        {titleText}
      </Typography>
      <Typography variant='body1'>{subTitleText}</Typography>
    </Box>
  )
}
interface IPageTitleSkeleton {
  subTitleText?: string
  sx?: SxProps
}

export function PageTitleSkeleton({ subTitleText, sx }: IPageTitleSkeleton) {
  return (
    <Box sx={sx}>
      <Skeleton variant='text' sx={{ fontSize: 'clamp(1.09rem, 1rem + 0.47vw, 1.33rem)' }} />
      {subTitleText && <Skeleton variant='text' sx={{ fontSize: '1rem' }} />}
    </Box>
  )
}
