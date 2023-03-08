import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

import {
  userNameTypeConversion,
  userImageTypeConversion,
  userEmailTypeConversion,
} from '@modules/navbar/utils'

interface IUserAvatarCard {
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>
}

export default function UserAvatarCard({ setAnchorEl }: IUserAvatarCard) {
  const { data } = useSession()

  const theme = useTheme()
  const router = useRouter()

  const handleAccountClick = () => {
    setAnchorEl(null)
    router.push('/profile')
  }
  const handleProfileClick = () => {
    setAnchorEl(null)
    router.push('/profile')
  }

  return (
    <Card sx={{ minWidth: 300 }}>
      <Stack direction='column' justifyContent='flex-start' alignItems='center'>
        <Avatar
          aria-label={userNameTypeConversion({ data })}
          variant='rounded'
          sx={{ width: 80, height: 80, mt: 2.6, mb: 1 }}
          alt={userNameTypeConversion({ data })}
          src={userImageTypeConversion({ data })}
        />
        <Typography
          variant='body1'
          gutterBottom
          sx={{ fontWeight: theme.typography.fontWeightBold }}>
          {userNameTypeConversion({ data })}
        </Typography>
        <Typography variant='body1' gutterBottom>
          {userEmailTypeConversion({ data })}
        </Typography>
      </Stack>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        <Button
          size='small'
          variant='outlined'
          onClick={handleProfileClick}
          endIcon={
            <Avatar
              aria-label={userNameTypeConversion({ data })}
              variant='rounded'
              sx={{ width: 18, height: 18 }}
              alt={userNameTypeConversion({ data })}
              src={userImageTypeConversion({ data })}
            />
          }
          sx={{ mt: 2 }}>
          Manage your profile
        </Button>
        <Button
          size='small'
          variant='outlined'
          onClick={handleAccountClick}
          endIcon={<SecurityOutlinedIcon fontSize='small' />}
          sx={{ my: 2 }}>
          Manage your settings
        </Button>
      </Stack>
      <Divider />
      <Stack direction='row' justifyContent='center' alignItems='center' sx={{ my: 1.4 }}>
        <Button
          size='small'
          variant='outlined'
          endIcon={<LogoutOutlinedIcon />}
          onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}>
          Sign out
        </Button>
      </Stack>
      <Divider />
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
