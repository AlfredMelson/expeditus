import Typography from '@mui/material/Typography'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StatusError = ({ error }: any) => {
  return (
    <Typography
      variant='body1'
      sx={{ color: 'var(--text-color-inverse)', textAlign: 'center', paddingTop: '6px' }}
      style={{ fontWeight: 600, fontSize: 'var(--text-size-md)' }}
    >
      {error}
    </Typography>
  )
}
