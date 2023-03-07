import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useFormContext } from 'react-hook-form'

export default function AskQuestionTitle() {
  const { register } = useFormContext()

  return (
    <Card variant='outlined' sx={{ borderStyle: 'none', px: 3, py: 2, mb: 1 }}>
      <Typography variant='h6'>Add system role</Typography>

      <TextField
        placeholder='You are a helpful assistant, answer as concisely as possible...'
        fullWidth
        {...register('title', { required: true, max: 150 })}
      />
    </Card>
  )
}
