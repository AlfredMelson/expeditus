import Stack from '@mui/material/Stack'

import { AuthorChip } from '@modules/permalink/components/author'

import { MoreInline } from '@modules/permalink/components/more'
import { PermalinkTitle } from '@modules/permalink/components/title'

import { QuestionTags } from '../tags'

interface IPermalinkCardHeader {
  username: string
  image: string
  createdAt: Date
}

export default function PermalinkCardHeader({ username, image, createdAt }: IPermalinkCardHeader) {
  return (
    <>
      <Stack direction='column' justifyContent='flex-start' spacing={2}>
        <Stack direction='row' justifyContent='space-between' alignItems='flex-start' spacing={1}>
          <PermalinkTitle text='question title' />
          <div style={{ flex: 1 }} />
          <MoreInline />
        </Stack>
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1}>
          <QuestionTags />
          <AuthorChip username={username} image={image} createdAt={createdAt} />
        </Stack>
      </Stack>
    </>
  )
}
