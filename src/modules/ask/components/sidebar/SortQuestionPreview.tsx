import Card from '@mui/material/Card'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'

import { MuiButton } from '@modules/common/components/button'

export default function SortQuestionPreview() {
  return (
    <Fade in timeout={1000}>
      <Card
        sx={{
          minWidth: 280,
          maxWidth: 360,
          display: 'flex',
          flexDirection: 'column',
          px: 2.5,
          py: 1,
          pb: 2.5,
          boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
        }}>
        <Typography variant='h6' sx={{ my: '10px' }}>
          Selected Prompt preview
        </Typography>
        <Typography variant='body1' sx={{ mb: '20px' }}>
          This is the Prompt title
        </Typography>
        <Typography variant='body1' sx={{ mb: '20px' }}>
          This is the Prompt body
        </Typography>
        <MuiButton buttonVariant='outlined' buttonText='Link to prompt' buttonLink='/' />
      </Card>
    </Fade>
  )
}
