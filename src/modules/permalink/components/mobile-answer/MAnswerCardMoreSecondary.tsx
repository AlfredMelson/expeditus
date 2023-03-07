import Stack from '@mui/material/Stack'

import { MuiButton } from '@modules/common/components/button'

export default function MAnswerCardMoreSecondary() {
  return (
    <>
      <Stack direction='row' spacing={1} sx={{ mt: 1 }}>
        <MuiButton buttonText='edit answer' buttonVariant='text' />
        <MuiButton buttonText='edit history' buttonVariant='text' />
      </Stack>
    </>
  )
}
