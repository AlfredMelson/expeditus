import React from 'react'

import VerifiedIcon from '@mui/icons-material/Verified'
import Avatar from '@mui/material/Avatar'

import ButtonBase from '@mui/material/ButtonBase'
import Popover from '@mui/material/Popover'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { format } from 'date-fns'
import { useSession } from 'next-auth/react'

import { MAuthorCard } from '@modules/prompts/components/author'
import { MSummaryMoreAuthor } from '@modules/prompts/components/summary'

interface IMSummaryHeader {
  username: string | null | undefined
  image: string
  createdAt: Date
}

export default function MSummaryHeader({ username, image, createdAt }: IMSummaryHeader) {
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
                ml: '12px',
                mb: '3px',
                fontSize: '15px',
                lineHeight: 0,
                letterSpacing: '0.5px',
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
        {status === 'authenticated' && <MSummaryMoreAuthor username={username} />}
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
        <MAuthorCard username={username} image={image} created={createdAt} />
      </Popover>
    </>
  )
}
