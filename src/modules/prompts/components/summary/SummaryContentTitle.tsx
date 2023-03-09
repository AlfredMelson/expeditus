import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'

import { useSetRecoilState } from 'recoil'

import { MuiButton } from '@modules/common/components/button'
import { More } from '@modules/prompts/components/more'
import { sortQuestionHoverIdAtom } from '@modules/prompts/recoil'

interface ISummaryContentTitle {
  title: string
  permalink: string
  questionId: string
}

export default function SummaryContentTitle({
  title,
  permalink,
  questionId,
}: ISummaryContentTitle) {
  const theme = useTheme()

  const setSortQuestionHoverId = useSetRecoilState(sortQuestionHoverIdAtom)

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='flex-start'>
      <MuiButton
        buttonLink={`/qn/${permalink}`}
        buttonVariant='text'
        buttonText={title}
        onClick={() => setSortQuestionHoverId(null)}
        sx={{ fontSize: theme.typography.h6 }}
      />
      <More title={title} id={questionId} />
    </Stack>
  )
}
