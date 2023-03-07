import Box from '@mui/material/Box'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

import { useLoading } from '@modules/layout/context'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 2,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}))

export default function PageLoadingProgressBar() {
  const { progress } = useLoading()

  return (
    <Box sx={{ width: '100%' }}>
      {progress === 100 ? (
        <Box sx={{ height: '2px', backgroundColor: 'transparent' }} />
      ) : (
        <BorderLinearProgress variant='indeterminate' value={progress} />
      )}
    </Box>
  )
}
