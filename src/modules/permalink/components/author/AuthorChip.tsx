import React from 'react'

import Avatar from '@mui/material/Avatar'
import ButtonBase from '@mui/material/ButtonBase'
import Chip from '@mui/material/Chip'
import Popover from '@mui/material/Popover'

import AuthorCard from './AuthorCard'

interface IAuthorChip {
  username: string
  image: string
  createdAt: Date
}

export default function AuthorChip({ username, image, createdAt }: IAuthorChip) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'author-chip' : undefined

  return (
    <>
      {/* {query.isLoading && (
        <Chip
          component={ButtonBase}
          onClick={handleClick}
          size='medium'
          avatar={
            <Avatar variant='rounded' sx={{ width: 18, height: 18 }}>
              <AccountBoxIcon />
            </Avatar>
          }
          label='Loading user'
          variant='outlined'
          sx={{ border: 'none' }}
        />
      )} */}

      <>
        <Chip
          component={ButtonBase}
          onClick={handleClick}
          size='medium'
          avatar={<Avatar variant='rounded' sx={{ width: 18, height: 18 }} src={image} />}
          label={username}
          variant='outlined'
          sx={{ border: 'none' }}
        />
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
          <AuthorCard name={username} image={image} created={createdAt} />
        </Popover>
      </>
    </>
  )
}
