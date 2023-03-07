import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Link from 'next/link'

import { PageTitle } from '@modules/common/components'

export default function AskQuestionHeader() {
  return (
    <Stack direction='row' alignItems='center' sx={{ px: 3, mb: 1 }}>
      <PageTitle titleText='Prompt GPT-3.5-turbo' sx={{ my: 1.5 }} />
      <div style={{ flexGrow: 1 }} />
      <Tooltip title='Close'>
        <IconButton component={Link} href={'/'} replace>
          <CloseIcon fontSize='medium' />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}
