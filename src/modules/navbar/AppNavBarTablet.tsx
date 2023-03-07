import AppBar from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'
import { alpha } from '@mui/material/styles'
import { useSession } from 'next-auth/react'

import { UserAvatarTablet } from '@modules/navbar/components/interaction'
import { LogoTablet, LogoDesktop } from '@modules/navbar/components/logo'
import { NavigationTablet } from '@modules/navbar/components/navigation'
import { SearchSectionUnauth } from '@modules/navbar/components/search'
import { SearchProvider } from '@modules/navbar/context'

const AppNavBarTablet = () => {
  const { status } = useSession()

  const AppBarContents = () => {
    if (status === 'authenticated') {
      return (
        <Stack
          direction='row'
          justifyContent={{
            xs: 'space-between',
            md: 'center',
          }}
          alignItems='center'
          sx={{ height: '48px', mx: '10px' }}
        >
          <LogoTablet />
          <SearchProvider>
            <NavigationTablet />
          </SearchProvider>
          <UserAvatarTablet />
        </Stack>
      )
    }

    if (status === 'loading' || 'unauthenticated') {
      return (
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ pt: '6px', pb: '8px', mx: { sm: '12px', md: '18px' } }}
        >
          <LogoDesktop />
          <SearchSectionUnauth />
        </Stack>
      )
    }
  }

  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: theme => theme.palette.background.paper,
        width: '100%',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: theme => alpha(theme.palette.primary.main, 0.1),
      }}
    >
      {AppBarContents()}
    </AppBar>
  )
}

export default AppNavBarTablet
