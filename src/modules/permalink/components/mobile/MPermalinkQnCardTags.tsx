import React from 'react'

import ButtonBase from '@mui/material/ButtonBase'
import Chip from '@mui/material/Chip'
import Drawer from '@mui/material/Drawer'
import Stack from '@mui/material/Stack'

import { useSetRecoilState } from 'recoil'

import { MTagCard } from '@modules/common/components/tag-drawer'
import { CapitalizeTag } from '@modules/common/func'
import { mobileDrawerOpenAtom } from '@modules/prompts/recoil'

interface IMPermalinkQnCardTags {
  tag: { name: string }[]
}

export default function MPermalinkQnCardTags({ tag }: IMPermalinkQnCardTags) {
  const setMobileDrawerOpen = useSetRecoilState(mobileDrawerOpenAtom)

  const [open, setOpen] = React.useState(false)
  const [tagDrawerName, setTagDrawerName] = React.useState<string>('')

  const toggleDrawer =
    (open: boolean, tagName: string) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpen(open)
      setTagDrawerName(tagName)
      setMobileDrawerOpen(true)
    }

  const handleClose = () => {
    setOpen(false)
    setTagDrawerName('')
    setMobileDrawerOpen(false)
  }

  return (
    <Stack direction='row' justifyContent='flex-start' alignItems='center' sx={{ mt: 2 }}>
      {tag.map(tag => (
        <Chip
          key={tag.name}
          variant='outlined'
          label={CapitalizeTag(tag.name)}
          clickable
          component={ButtonBase}
          onClick={toggleDrawer(true, tag.name)}
          sx={theme => ({
            color: theme.palette.text.primary,
            borderColor: theme.palette.text.primary,
            ':hover': { color: theme.palette.text.primary },
          })}
        />
      ))}
      <Drawer elevation={0} anchor='bottom' open={open} onClose={toggleDrawer(false, '')}>
        <MTagCard tagName={tagDrawerName} handleClose={handleClose} />
      </Drawer>
    </Stack>
  )
}
