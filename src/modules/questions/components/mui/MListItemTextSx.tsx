import ListItemText from '@mui/material/ListItemText'

import { styled } from '@mui/material/styles'

import type { ListItemTextProps } from '@mui/material/ListItemText'

const MListItemTextSx = styled((props: ListItemTextProps) => <ListItemText {...props} />)(
  ({ theme }) => ({
    '& .MuiListItemText-primary': {
      fontSize: '15px',
      color: theme.palette.text.primary,
    },
  }),
)
export default MListItemTextSx
