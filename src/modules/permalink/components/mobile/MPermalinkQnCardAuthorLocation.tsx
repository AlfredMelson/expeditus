import PublicIcon from '@mui/icons-material/Public'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface IMPermalinkQnCardAuthorLocation {
  location: string
}

export default function MPermalinkQnCardAuthorLocation({
  location,
}: IMPermalinkQnCardAuthorLocation) {
  return (
    <Stack direction='row' justifyContent='flex-start' alignItems='center'>
      <PublicIcon fontSize='medium' sx={theme => ({ color: theme.palette.text.primary })} />
      <Typography variant='body1' sx={{ ml: '5px', pt: '1px', textTransform: 'uppercase' }}>
        {location}
      </Typography>
    </Stack>
  )
}
