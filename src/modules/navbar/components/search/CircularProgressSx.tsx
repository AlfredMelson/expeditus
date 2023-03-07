import CircularProgress, { type CircularProgressProps } from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'

import { AppSwatch } from '@src/styles'

export const CircularProgressSx = styled(
  (props: CircularProgressProps) => <CircularProgress size={20} {...props} />,
  {
    name: 'CircularProgress',
    slot: 'style',
  },
)(() => ({
  color: AppSwatch.Dark.Blue[50],
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: '-10px',
  marginLeft: '-9px',
}))
