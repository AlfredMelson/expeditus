import PublicIcon from '@mui/icons-material/Public'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface IMSummaryAuthorLocation {
  location: string
}

export default function MSummaryAuthorLocation({ location }: IMSummaryAuthorLocation) {
  return (
    <Stack direction='row' justifyContent='flex-start' alignItems='center' sx={{ mb: 1 }}>
      <PublicIcon fontSize='medium' sx={theme => ({ color: theme.palette.text.secondary })} />
      <Typography
        variant='body1'
        sx={theme => ({
          ml: '5px',
          pt: '1px',
          letterSpacing: '0.7px',
          textTransform: 'uppercase',
          color: theme.palette.text.secondary,
        })}>
        {location}
      </Typography>
    </Stack>
  )
}
