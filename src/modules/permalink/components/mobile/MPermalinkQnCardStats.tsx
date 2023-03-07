import Stack from '@mui/material/Stack'

import { MStatsStackSx, MStatsTypographySx } from '@modules/permalink/components/mui'

export default function MPermalinkQnCardStats() {
  const answers = 1
  const votes = 22
  const bookmarked = 26
  const views = 56

  return (
    <Stack direction='row' justifyContent='space-between' sx={{ mt: 2, px: 1 }}>
      <MStatsStackSx>
        <MStatsTypographySx>{answers}</MStatsTypographySx>
        <MStatsTypographySx>{answers === 1 ? 'answer' : 'answers'}</MStatsTypographySx>
      </MStatsStackSx>
      <MStatsStackSx>
        <MStatsTypographySx>{votes}</MStatsTypographySx>
        <MStatsTypographySx> votes </MStatsTypographySx>
        {/* <MStatsTypographySx>{votes == 1 ? 'vote' : 'votes'}</MStatsTypographySx> */}
      </MStatsStackSx>
      <MStatsStackSx>
        <MStatsTypographySx>{bookmarked}</MStatsTypographySx>
        <MStatsTypographySx> bookmarks </MStatsTypographySx>
        {/* <MStatsTypographySx>{views === 1 ? 'view' : 'views'}</MStatsTypographySx> */}
      </MStatsStackSx>
      <MStatsStackSx>
        <MStatsTypographySx>{views}</MStatsTypographySx>
        <MStatsTypographySx> views </MStatsTypographySx>
        {/* <MStatsTypographySx>{views === 1 ? 'view' : 'views'}</MStatsTypographySx> */}
      </MStatsStackSx>
    </Stack>
  )
}
