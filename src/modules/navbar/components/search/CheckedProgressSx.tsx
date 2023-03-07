import { styled } from '@mui/material/styles'

import { AppSwatch } from 'src/styles'

import CheckIcon from './CheckIcon'

export const CheckedProgressSx = styled(CheckIcon, {
  name: 'CheckedProgress',
  slot: 'style',
})(() => ({
  color: AppSwatch.Dark.Blue[50],
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: '-12px',
  marginLeft: '-9px',
}))
