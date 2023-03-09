import React from 'react'

import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'

import Backdrop from '@mui/material/Backdrop'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import MenuItem from '@mui/material/MenuItem'
import Popover from '@mui/material/Popover'

import { ShareQuestionCard } from '@modules/common/components/shareQuestionCard'

interface IShareLinkDialog {
  title: string
  setMenuAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>
}

export default function ShareLinkDialog({ title, setMenuAnchor }: IShareLinkDialog) {
  const [shareLinkAnchor, setShareLinkAnchor] = React.useState<HTMLLIElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setShareLinkAnchor(event.currentTarget)
  }

  const handleClose = () => {
    setShareLinkAnchor(null)
    setMenuAnchor(null)
  }

  const open = Boolean(shareLinkAnchor)

  return (
    <>
      <MenuItem onClick={handleClick}>
        <ListItemIcon>
          <ShareOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary='Share' />
      </MenuItem>

      <Backdrop sx={{ zIndex: theme => theme.zIndex.drawer + 1 }} open={open}>
        <Popover
          open={open}
          onClose={handleClose}
          anchorEl={shareLinkAnchor}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
          <ShareQuestionCard title={title} handleClose={handleClose} />
        </Popover>
      </Backdrop>
    </>
  )
}
