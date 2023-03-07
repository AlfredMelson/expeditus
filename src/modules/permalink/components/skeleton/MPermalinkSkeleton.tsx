import React from 'react'

import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export default function MPermalinkSkeleton() {
  return (
    <Stack
      direction='column'
      justifyContent='flex-start,'
      sx={{
        height: '100%',
        px: 2,
        py: '16px',
        backgroundImage: 'linear-gradient(60deg, #152153 0%, #4360CA 100%)',
      }}>
      <Stack direction='row'>
        <Skeleton variant='rounded' width={38} height={38} />
        <Stack direction='column' sx={{ ml: '12px', width: '100px' }}>
          <Typography
            sx={{
              fontSize: '15px',
              mb: '3px',
            }}>
            <Skeleton />
          </Typography>
          <Typography
            sx={{
              fontSize: '12px',
            }}>
            <Skeleton />
          </Typography>
        </Stack>
        <div style={{ flex: 1 }} />
        <Skeleton variant='rounded' width={24} height={24} />
      </Stack>
      <Divider variant='fullWidth' sx={{ my: 1.5 }} />
      <Typography
        sx={{
          fontSize: '22px',
        }}>
        <Skeleton />
        <Skeleton />
      </Typography>
      <Stack direction='row' spacing={2} sx={{ mt: 1, mb: 2 }}>
        <Skeleton variant='rounded' width={24} height={24} />
        <Skeleton variant='rounded' width={24} height={24} />
        <Skeleton variant='rounded' width={24} height={24} />
        <Skeleton variant='rounded' width={24} height={24} />
      </Stack>
      <Typography
        sx={{
          fontSize: '16px',
        }}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Typography>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing={2}
        sx={{ my: 2 }}>
        <Skeleton variant='rounded' width={96} height={24} />
        <Skeleton variant='rounded' width={96} height={24} />
        <Skeleton variant='rounded' width={96} height={24} />
      </Stack>
      <Stack direction='row' justifyContent='space-between'>
        <Typography
          sx={{
            fontSize: '15px',
            width: '80px',
          }}>
          <Skeleton />
        </Typography>
        <Typography
          sx={{
            fontSize: '15px',
            width: '80px',
          }}>
          <Skeleton />
        </Typography>
        <Typography
          sx={{
            fontSize: '15px',
            width: '80px',
          }}>
          <Skeleton />
        </Typography>
        <Typography
          sx={{
            fontSize: '15px',
            width: '80px',
          }}>
          <Skeleton />
        </Typography>
      </Stack>
    </Stack>
  )
}
