import Stack from '@mui/material/Stack'

import { MStatsStackSx, MStatsTypographySx } from '@modules/permalink/components/mui'

export default function MAnswerCardStats() {
  const votes = 2 as number
  const bookmarked = 56 as number
  const views = 239 as number

  return (
    <Stack direction='row' justifyContent='space-between' sx={{ mt: 1, px: 1 }}>
      <MStatsStackSx>
        <MStatsTypographySx>{votes}</MStatsTypographySx>
        <MStatsTypographySx> {votes == 1 ? 'vote' : 'votes'} </MStatsTypographySx>
      </MStatsStackSx>
      <MStatsStackSx>
        <MStatsTypographySx>{bookmarked}</MStatsTypographySx>
        <MStatsTypographySx> {bookmarked == 1 ? 'bookmark' : 'bookmarks'} </MStatsTypographySx>
      </MStatsStackSx>
      <MStatsStackSx>
        <MStatsTypographySx>{views}</MStatsTypographySx>
        <MStatsTypographySx> {views == 1 ? 'view' : 'views'} </MStatsTypographySx>
      </MStatsStackSx>
    </Stack>
  )
}
