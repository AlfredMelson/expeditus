import Stack from '@mui/material/Stack'

import { MuiButton } from '@modules/common/components/button'

export default function MPermalinkQnCardMoreSecondary() {
  return (
    <>
      <Stack direction='row' spacing={1} sx={{ mt: 1 }}>
        <MuiButton buttonText='edit question' buttonVariant='text' />
        <MuiButton buttonText='edit history' buttonVariant='text' />
      </Stack>
    </>
  )
}
