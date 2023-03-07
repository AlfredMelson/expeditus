import Stack from '@mui/material/Stack'
import { useSession } from 'next-auth/react'

import {
  AddMenu,
  NotificationMenu,
  UserAvatarDesktop,
} from '@modules/navbar/components/interaction'
import { SignInButton } from '@modules/navbar/components/sign-button'

export default function InteractionSection() {
  const { status } = useSession()

  const authenticationState = () => {
    if (status === 'authenticated') {
      return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1}>
          <NotificationMenu />
          <AddMenu />
          <UserAvatarDesktop />
        </Stack>
      )
    }
    if (status === 'loading' || 'unauthenticated') {
      return <SignInButton sx={{ mx: 2 }} />
    }
  }

  return <>{authenticationState()}</>
}
