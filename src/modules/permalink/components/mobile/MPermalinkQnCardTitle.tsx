import Typography from '@mui/material/Typography'

interface IMPermalinkQnCardTitle {
  title: string
}

export default function MPermalinkQnCardTitle({ title }: IMPermalinkQnCardTitle) {
  return (
    <Typography
      variant='h5'
      sx={theme => ({
        mt: 2,
        fontSize: '24px',
        fontWeight: 500,
        color: theme.palette.text.primary,
      })}>
      {title}
    </Typography>
  )
}
