import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import type { TypographyProps } from '@mui/material/Typography'

const MStatsTypographySx = styled((props: TypographyProps) => <Typography {...props} />)(() => ({
  fontSize: '13px',
  fontWeight: 300,
  color: '#c9d1d9',
}))
export default MStatsTypographySx
