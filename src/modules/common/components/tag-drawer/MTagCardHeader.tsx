import TagIcon from '@mui/icons-material/Tag'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { MTagCardClose } from '@modules/common/components/tag-drawer'
import { CapitalizeTag } from '@modules/common/func'

interface IMTagCardHeader {
  tagName: string
  handleClose?: () => void
}

export default function MTagCardHeader({ tagName, handleClose }: IMTagCardHeader) {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ m: 2 }}
      spacing={1}>
      <TagIcon fontSize='medium' />
      <Typography variant='h5' sx={{ pt: '4px' }}>
        {CapitalizeTag(tagName)}
      </Typography>
      <div style={{ flex: 1 }} />
      <MTagCardClose handleClose={handleClose} />
    </Stack>
  )
}
