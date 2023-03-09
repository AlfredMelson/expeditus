import React from 'react'

import BlockIcon from '@mui/icons-material/Block'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { MListItemTextSx } from '@modules/prompts/components/mui'

interface IMSummaryMoreAuthor {
  username: string | null | undefined
}

export default function MSummaryMoreAuthor({ username }: IMSummaryMoreAuthor) {
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null)
  const open = Boolean(menuAnchor)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget)
  }
  const handleMenuClose = () => {
    setMenuAnchor(null)
  }

  //  <ListItemText primary={route.icon === 'hide' ? route.name + ' ' + author : route.name} />

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}>
        <MoreHorizIcon
          sx={theme => ({
            color: theme.palette.text.primary,
            ':hover': { color: theme.palette.text.primary },
          })}
        />
      </IconButton>
      <Menu
        sx={{ opacity: 0.96 }}
        anchorEl={menuAnchor}
        id='account-menu'
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <MenuItem divider sx={{ pr: 0 }} onClick={handleMenuClose}>
          <MListItemTextSx primary={`Info on ${username}`} />
          <ListItemIcon sx={{ ml: '14px' }}>
            <InfoOutlinedIcon sx={theme => ({ color: theme.palette.text.primary })} />
          </ListItemIcon>
        </MenuItem>
        <MenuItem divider sx={{ pr: 0 }} onClick={handleMenuClose}>
          <MListItemTextSx primary={`Follow ${username}`} />
          <ListItemIcon sx={{ ml: '14px' }}>
            <PersonAddAlt1Icon sx={theme => ({ color: theme.palette.text.primary })} />
          </ListItemIcon>
        </MenuItem>
        <MenuItem divider sx={{ pr: 0 }} onClick={handleMenuClose}>
          <MListItemTextSx primary={`Mute ${username}`} />
          <ListItemIcon sx={{ ml: '14px' }}>
            <VolumeOffIcon sx={theme => ({ color: theme.palette.text.primary })} />
          </ListItemIcon>
        </MenuItem>
        <MenuItem sx={{ pr: 0 }} onClick={handleMenuClose}>
          <MListItemTextSx primary={`Block ${username}`} />
          <ListItemIcon sx={{ ml: '14px' }}>
            <BlockIcon sx={theme => ({ color: theme.palette.text.primary })} />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  )
}
