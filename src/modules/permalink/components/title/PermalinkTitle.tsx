import { type SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface IPermalinkTitle {
  text: string
  containerSx?: SxProps
}

export default function PermalinkTitle({ text, containerSx }: IPermalinkTitle) {
  return (
    <Box sx={containerSx}>
      <Typography component='h2' variant='h5'>
        {text}
      </Typography>
    </Box>
  )
}
