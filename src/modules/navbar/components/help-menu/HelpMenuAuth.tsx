import React from 'react'

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import IconButton from '@mui/material/IconButton'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'

import { HelpMenuDivider } from '@modules/navbar/components/help-menu'
import { ROUTES } from '@modules/navbar/constants'

export default function HelpMenuAuth() {
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
      <Tooltip title='Help'>
        <IconButton
          onClick={handleClick}
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
        >
          <HelpOutlineOutlinedIcon fontSize='medium' />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={menuAnchor}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {ROUTES.SUPPORT_PRIMARY.map((route, index) => (
          <MenuItem key={index}>
            <ListItemText primary={route.name} />
          </MenuItem>
        ))}
        <HelpMenuDivider />
        {ROUTES.SUPPORT_SECONDARY.map((route, index) => (
          <MenuItem key={index}>
            <ListItemText primary={route.name} />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
