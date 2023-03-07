import { alpha } from '@mui/material'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export default function SummarySkeleton() {
  return (
    <>
      {Array.from({ length: 3 }, (_, index) => (
        <Box
          key={index}
          sx={theme => ({
            py: 1,
            bgcolor: theme.palette.background.paper,
            borderRadius: '4px',
            mb: '4px',
            '&:first-of-type': {
              mt: '2px',
            },
            transition: theme.transitions.create('all', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            ':hover': {
              bgcolor: alpha(theme.palette.background.paper, 0.9),
            },
          })}
        >
          <Stack direction='row' justifyContent='flex-start' spacing={1} sx={{ mx: '6px' }}>
            <Stack
              direction='column'
              justifyContent='flex-start'
              alignItems='flex-end'
              spacing={1}
              sx={{ marginRight: '16px', minWidth: '70px' }}
            >
              <Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={1}>
                <Skeleton variant='text' sx={{ fontSize: '1rem', width: '16px' }} />
                <Skeleton variant='text' sx={{ fontSize: '1rem', width: '30px' }} />
              </Stack>
              <Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={1}>
                <Skeleton variant='text' sx={{ fontSize: '1rem', width: '16px' }} />
                <Skeleton variant='text' sx={{ fontSize: '1rem', width: '30px' }} />
              </Stack>
              <Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={1}>
                <Skeleton variant='text' sx={{ fontSize: '1rem', width: '16px' }} />
                <Skeleton variant='text' sx={{ fontSize: '1rem', width: '30px' }} />
              </Stack>
            </Stack>
            <Stack
              direction='column'
              justifyContent=' flex-start'
              alignItems='flex-start'
              spacing={1}
              sx={{ width: '100%' }}
            >
              <Skeleton variant='text' sx={{ fontSize: '2rem', width: '100%' }} />
              <Stack direction='row' spacing={1}>
                {Array.from({ length: 3 }, (_, index) => (
                  <Skeleton key={index} variant='rounded' sx={{ width: '80px', height: '20px' }} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>
      ))}
    </>
  )
}
