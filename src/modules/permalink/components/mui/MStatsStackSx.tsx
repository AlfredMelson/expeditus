import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import type { StackProps } from '@mui/material/Stack'

const MStatsStackSx = styled((props: StackProps) => (
  <Stack direction='row' alignItems='center' spacing={1} {...props} />
))(() => ({}))
export default MStatsStackSx
