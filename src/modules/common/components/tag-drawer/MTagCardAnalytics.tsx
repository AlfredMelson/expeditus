import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import WhatshotIcon from '@mui/icons-material/Whatshot'

import Stack from '@mui/material/Stack'

import Typography from '@mui/material/Typography'

export default function MTagCardAnalytics() {
  return (
    <Stack direction='row' justifyContent='space-around' alignItems='center'>
      <Stack direction='row' justifyContent='center' alignItems='center'>
        <TrendingUpIcon sx={{ color: 'green', ':hover': { color: 'green' } }} />
        <Typography variant='body1' sx={{ ml: 1, fontSize: '15px' }}>
          260k watchers{' '}
        </Typography>
      </Stack>
      <Stack direction='row' justifyContent='center' alignItems='center'>
        <WhatshotIcon sx={{ color: 'red', ':hover': { color: 'red' } }} />
        <Typography variant='body1' sx={{ ml: 1, fontSize: '15px' }}>
          1.8m questions
        </Typography>
      </Stack>
    </Stack>
  )
}
