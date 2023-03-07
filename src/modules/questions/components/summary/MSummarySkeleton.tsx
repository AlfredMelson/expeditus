import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export default function MSummarySkeleton() {
  return (
    <Box
      sx={{
        p: '16px',
        m: '20px',
        maxHeight: '450px',
        backgroundImage: 'linear-gradient(70deg, #182661, #3A5ECF 100%)',
        borderRadius: '14px',
        '&:first-of-type': {
          mt: '10px',
        },
      }}>
      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
        <Skeleton variant='rounded' width={36} height={36} />
        <Stack direction='column'>
          <Skeleton variant='text' sx={{ fontSize: '1rem', ml: '12px', width: '120px' }} />
          <Skeleton variant='text' sx={{ fontSize: '1rem', ml: '12px', width: '120px' }} />
        </Stack>
      </Stack>
      <Divider variant='fullWidth' sx={{ mt: 1.5, mb: 2 }} />
      <Stack direction='row' justifyContent='flex-start' alignItems='center' sx={{ mt: 1 }}>
        <Skeleton variant='text' sx={{ fontSize: '1.3rem', width: '20px' }} />
        <Skeleton variant='text' sx={{ fontSize: '1.3rem', ml: '5px', width: '80px' }} />
        <Skeleton variant='text' sx={{ fontSize: '1.3rem', ml: '5px', width: '100px' }} />
      </Stack>
      <Stack
        direction='column'
        justifyContent='flex-start'
        alignItems='flex-start'
        sx={{ mt: 1, mb: 1.5 }}>
        <Skeleton variant='text' sx={{ fontSize: '1.4rem', width: '100%' }} />
        <Skeleton variant='text' sx={{ fontSize: '1.4rem', width: '100%' }} />
        <Skeleton variant='text' sx={{ fontSize: '1rem', width: '100%', mt: 0.5 }} />
        <Skeleton variant='text' sx={{ fontSize: '1rem', width: '100%' }} />
        <Skeleton variant='text' sx={{ fontSize: '1rem', width: '100%' }} />
        {/* <MSummaryContentBody body={body} permalink={permalink} /> */}
      </Stack>
      <Stack direction='row' spacing={1} sx={{ mt: 2 }}>
        {Array.from({ length: 3 }, (_, index) => (
          <Skeleton key={index} variant='rounded' sx={{ width: '80px', height: '20px' }} />
        ))}
      </Stack>
      <Stack direction='row' justifyContent='space-between' sx={{ mt: 2 }}>
        <Stack direction='row' alignItems='center' spacing={0.7}>
          <Skeleton variant='text' sx={{ fontSize: '1rem', width: '40px' }} />
        </Stack>
        <Stack direction='row' alignItems='center' spacing={0.7}>
          <Skeleton variant='text' sx={{ fontSize: '1rem', width: '40px' }} />
        </Stack>
        <Stack direction='row' alignItems='center' spacing={0.7}>
          <Skeleton variant='text' sx={{ fontSize: '1rem', width: '40px' }} />
        </Stack>
        <Stack direction='row' alignItems='center' spacing={0.7}>
          <Skeleton variant='text' sx={{ fontSize: '1rem', width: '40px' }} />
        </Stack>
      </Stack>
    </Box>
  )
}
