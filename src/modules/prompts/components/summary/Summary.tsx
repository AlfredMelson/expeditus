import Stack from '@mui/material/Stack'

import { SummaryContent, SummaryStats } from '@modules/prompts/components/summary'

interface ISummary {
  title: string
  questionId: string
  permalink: string
}

export default function Summary({ title, questionId, permalink }: ISummary) {
  return (
    <Stack direction='row' spacing={1} sx={{ mx: '6px' }}>
      <SummaryStats />
      <SummaryContent title={title} permalink={permalink} questionId={questionId} />
    </Stack>
  )
}
