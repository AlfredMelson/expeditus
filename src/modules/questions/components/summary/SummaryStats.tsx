import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function SummaryStats() {
  const votes = 22
  const answers = 1
  const views = 56

  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='flex-end'
      spacing={1}
      sx={{ marginRight: '16px', textDecoration: 'none', minWidth: '70px' }}
    >
      <Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={1}>
        <Typography variant='body2'>{votes}</Typography>
        <Typography variant='body2'> votes </Typography>
        {/* <Typography variant='body2'>{votes == 1 ? 'vote' : 'votes'}</Typography> */}
      </Stack>
      <Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={1}>
        <Typography variant='body2' sx={{ textDecoration: 'none' }}>
          {answers}
        </Typography>
        <Typography variant='body2'>{answers === 1 ? 'answer' : 'answers'}</Typography>
      </Stack>
      <Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={1}>
        <Typography variant='body2'>{views}</Typography>
        <Typography variant='body2'> views </Typography>
        {/* <Typography variant='body2'>{views === 1 ? 'view' : 'views'}</Typography> */}
      </Stack>
    </Stack>
  )
}
