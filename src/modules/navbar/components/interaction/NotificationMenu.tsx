import React from 'react'

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'

import { ROUTES } from '@modules/navbar/constants'

export default function NotificationMenu() {
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null)
  const open = Boolean(menuAnchor)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget)
  }
  const handleClose = () => {
    setMenuAnchor(null)
  }

  return (
    <>
      <Tooltip title='Alerts'>
        <IconButton
          onClick={handleClick}
          aria-label='total alerts'
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
        >
          <Badge variant='dot' color='info'>
            <NotificationsNoneOutlinedIcon fontSize='medium' />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={menuAnchor}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {ROUTES.NOTIFICATIONS_PRIMARY.map((route, index) => (
          <MenuItem key={index}>
            <ListItemText>{route.name}</ListItemText>
            <Badge badgeContent={4} sx={{ ml: 3 }} />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
