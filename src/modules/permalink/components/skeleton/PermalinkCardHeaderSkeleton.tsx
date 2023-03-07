import Stack from '@mui/material/Stack'

import { AuthorChipSkeleton } from '@modules/permalink/components/author'

import { PermalinkTitleSkeleton, MoreInlineSkeleton } from '@modules/permalink/components/skeleton'

import { QuestionTagsSkeleton } from '../tags'

export default function PermalinkCardHeaderSkeleton() {
  return (
    <Stack direction='column' justifyContent='flex-start' spacing={2}>
      <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1}>
        <PermalinkTitleSkeleton containerSx={{ width: '100%' }} />
        <div style={{ flex: 1 }} />
        <MoreInlineSkeleton />
      </Stack>
      <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1}>
        <QuestionTagsSkeleton />
        <AuthorChipSkeleton />
      </Stack>
    </Stack>
  )
}
