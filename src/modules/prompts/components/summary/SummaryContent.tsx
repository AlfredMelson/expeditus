import Stack from '@mui/material/Stack'

import { SummaryContentTags, SummaryContentTitle } from '@modules/prompts/components/summary'

interface ISummaryContent {
  title: string
  permalink: string
  questionId: string
}

export default function SummaryContent({ title, permalink, questionId }: ISummaryContent) {
  return (
    <Stack direction='column' justifyContent='space-between' sx={{ width: '100%' }}>
      <SummaryContentTitle title={title} permalink={permalink} questionId={questionId} />
      <SummaryContentTags questionId={questionId} />
    </Stack>
  )
}
