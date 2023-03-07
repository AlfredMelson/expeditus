import Typography from '@mui/material/Typography'

interface IMAnswerCardBody {
  body: string
}
export default function MAnswerCardBody({ body }: IMAnswerCardBody) {
  return (
    <Typography
      variant='body1'
      sx={{ mt: 1, fontSize: '18px', fontWeight: 400 }}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  )
}
