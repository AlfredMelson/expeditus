import React from 'react'

import { alpha } from '@mui/material'
import ButtonBase from '@mui/material/ButtonBase'
import Chip from '@mui/material/Chip'
import Drawer from '@mui/material/Drawer'
import Grid from '@mui/material/Unstable_Grid2'

import { useSetRecoilState } from 'recoil'

import { MTagCard } from '@modules/common/components/tag-drawer'
import { mobileDrawerOpenAtom } from '@modules/prompts/recoil'

interface IMSummaryContentTags {
  tag: { name: string }[]
}

export default function MSummaryContentTags({ tag }: IMSummaryContentTags) {
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
    <>
      <Grid container spacing={2} sx={{ mb: 1 }}>
        {tag.map(tag => (
          <Grid xs='auto' key={tag.name}>
            <Chip
              label={tag.name}
              clickable
              component={ButtonBase}
              onClick={toggleDrawer(true, tag.name)}
              sx={theme => ({
                px: 0.7,
                fontSize: '14px',
                letterSpacing: '0.7px',
                textTransform: 'capitalize',
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                ':hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                },
                '&.MuiButtonBase-root': {
                  height: '30px',
                  borderRadius: '30px',
                },
              })}
            />
          </Grid>
        ))}
      </Grid>
      <Drawer anchor='bottom' elevation={0} open={open} onClose={toggleDrawer(false, '')}>
        <MTagCard tagName={tagDrawerName} handleClose={handleClose} />
      </Drawer>
    </>
  )
}
