import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

import { LocationSelector } from '@modules/ask/components/location'

export default function AskQuestionLocation() {
  return (
    <Card variant='outlined' sx={{ borderStyle: 'none', px: 3, py: 2, mb: 1 }}>
      <Typography variant='h6'>Location</Typography>
      <LocationSelector />
    </Card>
  )
}
