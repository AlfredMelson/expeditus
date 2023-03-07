import React from 'react'

import VerifiedIcon from '@mui/icons-material/Verified'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Popover from '@mui/material/Popover'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { format } from 'date-fns'

import { useSession } from 'next-auth/react'
import { useRecoilValue } from 'recoil'

import { MPermalinkAuthorCard } from '@modules/permalink/components/mobile'
import { permalinkDataStatusAtom } from '@modules/permalink/recoil'

interface IMAnswerCardHeader {
  image: string
  username?: string | null
  createdAt: Date
}

export default function MAnswerCardHeader({ image, username, createdAt }: IMAnswerCardHeader) {
  const { status } = useSession()

  const permalinkDataStatus = useRecoilValue(permalinkDataStatusAtom)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (status === 'authenticated') {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'author-chip' : undefined

  return (
    <>
      {permalinkDataStatus !== 'isSuccess' && (
        <ButtonBase>
          <Stack direction='row' justifyContent='flex-start' alignItems='center'>
            <Skeleton variant='rounded' width={35} height={35} />
            <Stack direction='column'>
              <Skeleton variant='text' sx={{ fontSize: '1.2rem', ml: '12px', width: '120px' }} />
              <Skeleton variant='text' sx={{ fontSize: '1.2rem', ml: '12px', width: '120px' }} />
            </Stack>
          </Stack>
        </ButtonBase>
      )}
      {permalinkDataStatus === 'isSuccess' && (
        <Box>
          <Stack direction='row' justifyContent='flex-start' alignItems='flex-start'>
            <ButtonBase
              onClick={handleClick}
              sx={{ cursor: status === 'authenticated' ? 'pointer' : 'default' }}>
              <Avatar variant='rounded' sx={{ width: 38, height: 38 }} src={image} />
              <Stack direction='column' alignItems='flex-start' justifyContent='flex-end'>
                <Typography
                  variant='h6'
                  sx={theme => ({
                    fontSize: '15px',
                    ml: '12px',
                    lineHeight: 0,
                    mb: '3px',
                    color: theme.palette.text.primary,
                  })}>
                  {username}
                  <VerifiedIcon
                    fontSize='small'
                    sx={theme => ({
                      ml: '5px',
                      width: 16,
                      height: 16,
                      color: theme.palette.text.primary,
                    })}
                  />
                </Typography>
                <Typography
                  color='primary.dark'
                  variant='body2'
                  sx={theme => ({
                    fontSize: '12px',
                    ml: '12px',
                    fontWeight: 500,
                    color: theme.palette.text.secondary,
                  })}>
                  member since {format(new Date(createdAt), 'yyyy')}
                </Typography>
              </Stack>
            </ButtonBase>
          </Stack>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            sx={{ marginTop: 1 }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}>
            <MPermalinkAuthorCard username={username} image={image} created={createdAt} />
          </Popover>
        </Box>
      )}
    </>
  )
}
