import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import DoDisturbAltOutlinedIcon from '@mui/icons-material/DoDisturbAltOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'

import { useSession } from 'next-auth/react'

import { ROUTES } from '@modules/permalink/constants'
import { userNameTypeConversion } from '@modules/permalink/func/dataTypeConversion'

export default function MoreInline() {
  const { data } = useSession()

  const profileHasLiked = true

  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'share':
        return <ShareOutlinedIcon />
      case 'hide':
        return <DoDisturbAltOutlinedIcon />
      case 'save':
        return <BookmarkBorderOutlinedIcon />
    }
  }

  return (
    <>
      <Stack direction='row' spacing={1}>
        <Tooltip title='Good quesiton'>
          <IconButton>{profileHasLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}</IconButton>
        </Tooltip>
        {ROUTES.MORE_INLINE.map((route, index) => (
          <Tooltip
            title={
              route.icon === 'hide'
                ? route.name + ' ' + userNameTypeConversion({ data })
                : route.name
            }
            key={index}>
            <IconButton>{iconSwitch(route.icon)}</IconButton>
          </Tooltip>
        ))}
      </Stack>
    </>
  )
}
