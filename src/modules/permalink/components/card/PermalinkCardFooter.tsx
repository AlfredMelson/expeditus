import { alpha } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import { EngagementDropdown } from '@modules/permalink/components/dropdown'

export default function PermalinkCardSubBody() {
  return (
    <Box sx={{ mt: '10px' }}>
      <Box
        sx={theme => ({
          borderTop: '1px solid',
          borderColor: alpha(theme.palette.primary.main, 0.1),
          mt: '10px',
          pt: '20px',
        })}>
        <Stack direction='row' justifyContent='flex-start' alignItems='center'>
          <EngagementDropdown dateCreated='Date created' dateUpdated='Date updated' />
        </Stack>
      </Box>
    </Box>
  )
}
