import Typography from '@mui/material/Typography'

interface IMPermalinkQnCardBody {
  body: string
}
export default function MPermalinkQnCardBody({ body }: IMPermalinkQnCardBody) {
  return (
    <Typography
      variant='body1'
      sx={{ mt: 1, fontSize: '18px', fontWeight: 400 }}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  )
}
