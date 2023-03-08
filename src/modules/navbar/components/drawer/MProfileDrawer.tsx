import * as React from 'react'

import CloseIcon from '@mui/icons-material/Close'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import { useTheme } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'

import Typography from '@mui/material/Typography'

import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

import { useSetRecoilState } from 'recoil'

import { UserAvatarMobile } from '@modules/navbar/components/interaction'
import { useElementSize } from '@modules/navbar/hooks'
import { accountDrawerVisabilityAtom } from '@modules/navbar/recoil'
import {
  userNameTypeConversion,
  userImageTypeConversion,
  userEmailTypeConversion,
} from '@modules/navbar/utils'

export default function MProfileDrawer() {
  const { data } = useSession()

  const theme = useTheme()
  const router = useRouter()
  const setAccountDrawerVisability = useSetRecoilState(accountDrawerVisabilityAtom)
  const [state, setState] = React.useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState(open)
    setAccountDrawerVisability(open)
  }

  const [squareRef, { width }] = useElementSize()

  const handleAccountClick = () => {
    setState(false)
    router.push('/profile')
  }
  const handleProfileClick = () => {
    setState(false)
    router.push('/profile')
  }

  return (
    <>
      <IconButton size='large' onClick={toggleDrawer(true)} sx={{ mr: 1 }}>
        <UserAvatarMobile />
      </IconButton>
      <Drawer
        ref={squareRef}
        anchor='right'
        elevation={0}
        open={state}
        onClose={toggleDrawer(false)}
        sx={theme => ({
          minWidth: '300px',
          maxWidth: '70%',
          left: 'auto',
          '& .MuiDrawer-paper': {
            background: theme.palette.background.default,
          },
        })}>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{ height: '58px', width: { width }, px: 2 }}>
          <Typography variant='h5'>Account info</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon fontSize='medium' />
          </IconButton>
        </Stack>
        <Divider variant='fullWidth' />
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
            <Button
              disabled
              size='small'
              variant='text'
              sx={{ fontSize: theme.typography.caption }}>
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
            <Button
              disabled
              size='small'
              variant='text'
              sx={{ fontSize: theme.typography.caption }}>
              Terms of service
            </Button>
          </Stack>
        </CardActions>
      </Drawer>
    </>
  )
}
