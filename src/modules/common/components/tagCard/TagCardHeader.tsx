import TagIcon from '@mui/icons-material/Tag'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { TagCardShare } from '@modules/common/components/tagCard'

interface ITagCardHeader {
  tagName: string
  handleClose?: () => void
}

export default function TagCardHeader({ tagName, handleClose }: ITagCardHeader) {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ m: 2 }}
      spacing={1}>
      <TagIcon fontSize='medium' />
      <Typography variant='h6' component='div'>
        {tagName}
      </Typography>
      <div style={{ flex: 1 }} />
      <TagCardShare tagName={tagName} handleClose={handleClose} />
    </Stack>
  )
}
