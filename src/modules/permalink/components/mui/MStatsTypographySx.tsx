import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import type { TypographyProps } from '@mui/material/Typography'

const MStatsTypographySx = styled((props: TypographyProps) => <Typography {...props} />)(
  ({ theme }) => ({
    fontSize: '14px',
    fontWeight: 500,
    color: theme.palette.text.secondary,
  }),
)
export default MStatsTypographySx
