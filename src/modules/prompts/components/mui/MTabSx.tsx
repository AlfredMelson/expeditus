import { alpha, styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'

import type { TabProps } from '@mui/material/Tab'

interface MTabProps extends TabProps {
  component: React.ElementType
  href: string
}

const MTabSx = styled((props: MTabProps) => <Tab {...props} />)(({ theme }) => ({
  fontSize: '14px',
  letterSpacing: '0.7px',
  textTransform: 'uppercase',
  borderRadius: '30px',
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  ':hover': {
    color: theme.palette.mode === 'dark' ? '#58a6ff' : '#58a6ff',
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  '&.Mui-selected': {
    color: theme.palette.text.primary,
    backgroundColor: alpha(theme.palette.primary.main, 0.16),
  },
}))

export default MTabSx
