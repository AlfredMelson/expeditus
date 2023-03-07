import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

import { StatusError } from './StatusError'
import StatusFormSection from './StatusFormSection'
import StatusHeader from './StatusHeader'
import StatusIsBusy from './StatusIsBusy'
import StatusSuggestions from './StatusSuggestions'

interface IUserAvatarCard {
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>
}

export default function EditUserStatus({ setAnchorEl }: IUserAvatarCard) {
  return (
    <Card sx={{ minWidth: 300, px: '10px' }}>
      <Stack direction='column' justifyContent='flex-start'>
        <StatusHeader setAnchorEl={setAnchorEl} />
        <StatusFormSection />
        <StatusSuggestions />
        <StatusIsBusy />
        <Divider />
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ width: '100%', px: '40px', mt: '10px', mb: '6px' }}
        >
          <Button size='small' variant='text'>
            Set your status
          </Button>
          <Button size='small' variant='text'>
            Clear your status
          </Button>
        </Stack>
        <StatusError />
      </Stack>
    </Card>
  )
}
