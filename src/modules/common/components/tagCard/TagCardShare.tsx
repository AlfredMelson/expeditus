import React from 'react'

import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'

import Backdrop from '@mui/material/Backdrop'
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover'

import Tooltip from '@mui/material/Tooltip'

import { TagCardShareCard } from '@modules/common/components/tagCard'

interface ITagCardShare {
  tagName: string
  handleClose?: () => void
}

export default function TagCardShare({ tagName, handleClose }: ITagCardShare) {
  const [shareMenuAnchor, setShareMenuAnchor] = React.useState<null | HTMLElement>(null)
  const open = Boolean(shareMenuAnchor)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setShareMenuAnchor(event.currentTarget)
  }
  const handleShareMenuClose = () => {
    setShareMenuAnchor(null)
  }

  return (
    <>
      <Tooltip title='Share'>
        <IconButton onClick={handleClick}>
          <ShareOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Backdrop sx={{ zIndex: theme => theme.zIndex.drawer + 1 }} open={open}>
        <Popover
          open={open}
          anchorEl={shareMenuAnchor}
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
          <TagCardShareCard tagName={tagName} handleClose={handleShareMenuClose} />
        </Popover>
      </Backdrop>
    </>
  )
}
