import Stack from '@mui/material/Stack'

import { MStatsTypographySx } from '@modules/prompts/components/mui'

interface IMSummaryStats {
  views: number
  watching: number
}

export default function MSummaryStats({ views, watching }: IMSummaryStats) {
  const answers = 1
  const votes = 22

  const answerText = (value: number) => {
    switch (value) {
      case 0:
        return 'no answers'
      case 1:
        return 'answer'
      case undefined:
        return ''
      case null:
        return ''
      default:
        return 'answers'
    }
  }
  const voteText = (value: number) => {
    switch (value) {
      case 0:
        return 'no votes'
      case 1:
        return 'vote'
      case undefined:
        return ''
      case null:
        return ''
      default:
        return 'votes'
    }
  }
  const watchText = (value: number) => {
    switch (value) {
      case 0:
        return 'no watchers'
      case 1:
        return 'watcher'
      case undefined:
        return ''
      case null:
        return ''
      default:
        return 'watchers'
    }
  }

  return (
    <Stack direction='row' justifyContent='space-between' sx={{ px: 1 }}>
      <Stack direction='row' alignItems='center' spacing={0.7}>
        <MStatsTypographySx>{answers}</MStatsTypographySx>
        <MStatsTypographySx>{answerText(answers)}</MStatsTypographySx>
      </Stack>
      <Stack direction='row' alignItems='center' spacing={0.7}>
        <MStatsTypographySx>{votes}</MStatsTypographySx>
        <MStatsTypographySx> {voteText(votes)} </MStatsTypographySx>
        {/* <MStatsTypographySx>{votes == 1 ? 'vote' : 'votes'}</MStatsTypographySx> */}
      </Stack>
      <Stack direction='row' alignItems='center' spacing={0.7}>
        {watching !== 0 && <MStatsTypographySx>{watching}</MStatsTypographySx>}
        <MStatsTypographySx> {watchText(watching)} </MStatsTypographySx>
      </Stack>
      <Stack direction='row' alignItems='center' spacing={0.7}>
        <MStatsTypographySx>{views}</MStatsTypographySx>
        <MStatsTypographySx> views </MStatsTypographySx>
        {/* <MStatsTypographySx>{views === 1 ? 'view' : 'views'}</MStatsTypographySx> */}
      </Stack>
    </Stack>
  )
}
