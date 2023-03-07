import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { formatDistance } from 'date-fns'

interface IMPermalinkAuthorCard {
  image: string
  username: string | null | undefined
  created: Date
}

export default function MPermalinkAuthorCard({ image, username, created }: IMPermalinkAuthorCard) {
  const theme = useTheme()
  const formatedName = username ? username : 'Anonymous'

  return (
    <Card sx={{ minWidth: 260 }}>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        sx={{ m: 2 }}
        spacing={2}>
        <Avatar
          aria-label={formatedName}
          variant='rounded'
          sx={{ width: 80, height: 80 }}
          alt={formatedName}
          src={image}
        />
        <Stack direction='column' justifyContent='flex-start' alignItems='center' spacing={1}>
          <Typography variant='body1' sx={{ fontWeight: theme.typography.fontWeightBold }}>
            {formatedName}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction='column'
        justifyContent='flex-start'
        alignItems='flex-start'
        sx={{ m: 2 }}
        spacing={2}>
        <Stack direction='row' justifyContent='flex-start' alignItems='flex-end' spacing={1}>
          <Typography variant='body1'>member since:</Typography>
          <Typography variant='body1'>
            {created !== undefined && formatDistance(new Date(created), new Date())}
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ mt: 1 }} />
      <CardActions>
        <Stack direction='row' justifyContent='center' alignItems='center' sx={{ width: '100%' }}>
          <Button disabled size='small' variant='text' sx={{ fontSize: theme.typography.caption }}>
            Privacy policy
          </Button>
          <Box
            component='span'
            sx={{
              display: 'inline-block',
              transform: 'scale(0.8)',
              mx: 1,
              color: theme.palette.primary.main,
            }}>
            •
          </Box>
          <Button disabled size='small' variant='text' sx={{ fontSize: theme.typography.caption }}>
            Terms of service
          </Button>
        </Stack>
      </CardActions>
    </Card>
  )
}
