import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

interface IWysiwygOutput {
  value: string
}

export default function WysiwygOutput({ value }: IWysiwygOutput) {
  return (
    <Box component='form' noValidate autoComplete='off'>
      {value !== '' && (
        <>
          <Typography variant='body1' sx={{ mt: '10px', ml: '10px' }}>
            Preview of your question:
          </Typography>
          <TextField fullWidth multiline maxRows={4} value={value} />
        </>
      )}
    </Box>
  )
}
