import React from 'react'

import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover'
import { useSession } from 'next-auth/react'

import { UserAvatarCard } from '@modules/navbar/components/interaction'
import { userNameTypeConversion, userImageTypeConversion } from '@modules/navbar/utils'

export default function UserAvatarDesktop() {
  const { data } = useSession()

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <IconButton onClick={handleClick} sx={{ ml: 2 }}>
        <Avatar
          aria-describedby={id}
          aria-label={userNameTypeConversion({ data })}
          variant='rounded'
          sx={{ width: 28, height: 28 }}
          src={userImageTypeConversion({ data })}
        />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{ marginTop: 1 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <UserAvatarCard setAnchorEl={setAnchorEl} />
      </Popover>
    </>
  )
}
