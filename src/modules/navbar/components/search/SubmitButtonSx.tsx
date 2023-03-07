import Button, { type ButtonProps } from '@mui/material/Button'
import { alpha, styled } from '@mui/material/styles'

import { AppSwatch } from 'src/styles'

export const SubmitButtonSx = styled((props: ButtonProps) => (
  <Button size='medium' variant='contained' type='submit' {...props} />
))(() => ({
  minWidth: '102px',
  color: alpha(AppSwatch.Dark.Blue[50], 0.8),
  backgroundColor: AppSwatch.Dark.Black[50],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: AppSwatch.Dark.Blue[50],
    backgroundColor: AppSwatch.Dark.Grey[800],
  },
  '&.Mui-disabled': {
    color: AppSwatch.Dark.Grey[600],
    backgroundColor: AppSwatch.Dark.Black[50],
  },
}))
