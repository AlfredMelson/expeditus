import React from 'react'

import CloseIcon from '@mui/icons-material/Close'
import VerifiedIcon from '@mui/icons-material/Verified'
import Avatar from '@mui/material/Avatar'
import ButtonBase from '@mui/material/ButtonBase'
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { format } from 'date-fns'

import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { MPermalinkAuthorCard } from '@modules/permalink/components/mobile'

interface IMPermalinkQnCardHeader {
  image: string
  username?: string | null
  createdAt: Date
}

export default function MPermalinkQnCardHeader({
  image,
  username,
  createdAt,
}: IMPermalinkQnCardHeader) {
  const router = useRouter()
  const { status } = useSession()

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
        <div style={{ flex: 1 }} />
        <Tooltip title='Close'>
          <IconButton onClick={() => router.back()}>
            <CloseIcon sx={{ color: theme => theme.palette.text.primary }} />
          </IconButton>
        </Tooltip>
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
    </>
  )
}
