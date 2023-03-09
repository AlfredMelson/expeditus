import React from 'react'

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import DoDisturbAltOutlinedIcon from '@mui/icons-material/DoDisturbAltOutlined'

import MoreVertIcon from '@mui/icons-material/MoreVert'

import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'

import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'

import { useRecoilValue } from 'recoil'

import { ROUTES } from '@modules/permalink/constants'
import { sortQuestionHoverIdAtom } from '@modules/prompts/recoil'

import ShareLinkDialog from './ShareLinkDialog'

interface IMore {
  title: string
  id: string
}

export default function More({ title, id }: IMore) {
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null)
  const open = Boolean(menuAnchor)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget)
  }
  const handleMenuClose = () => {
    setMenuAnchor(null)
  }

  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'save':
        return <BookmarkBorderOutlinedIcon />
      case 'hide':
        return <DoDisturbAltOutlinedIcon />
      case 'more':
        return <ThumbUpOutlinedIcon />
      case 'fewer':
        return <ThumbDownAltOutlinedIcon />
    }
  }
  const sortQuestionHoverId = useRecoilValue(sortQuestionHoverIdAtom)

  //  <ListItemText primary={route.icon === 'hide' ? route.name + ' ' + author : route.name} />

  return (
    <>
      <Tooltip title='More'>
        <IconButton
          onClick={handleClick}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          sx={{
            opacity: sortQuestionHoverId === id ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}>
          <MoreVertIcon fontSize='medium' />
        </IconButton>
      </Tooltip>

      <Menu
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
        <ShareLinkDialog title={title} setMenuAnchor={setMenuAnchor} />
        {ROUTES.MORE.map((route, index) => (
          <MenuItem key={index}>
            <ListItemIcon>{iconSwitch(route.icon)}</ListItemIcon>
            <ListItemText primary={route.icon === 'hide' ? route.name : route.name} />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
