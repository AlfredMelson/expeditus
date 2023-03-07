import AppBar from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'
import { alpha, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useSession } from 'next-auth/react'

import { LogoTablet, LogoDesktop } from '@modules/navbar/components/logo'

import { NavigationDesktop, NavigationTablet } from '@modules/navbar/components/navigation'
import { SearchSectionAuth, SearchSectionUnauth } from '@modules/navbar/components/search'

import { InteractionSection } from './components/interaction'

export default function AppNavBar() {
  const theme = useTheme()

  const { status } = useSession()

  const isTablet = useMediaQuery(theme.breakpoints.only('sm'))

  const AppBarContents = () => {
    if (status === 'authenticated') {
      return (
        <>
          {!isTablet && (
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              sx={{ pt: '4px', mx: '16px' }}>
              <LogoDesktop />
              <SearchSectionAuth />
              <InteractionSection />
            </Stack>
          )}
          <Stack
            direction='row'
            justifyContent={{
              xs: 'space-between',
              md: 'center',
            }}
            alignItems='center'
            sx={{ height: '48px', mx: isTablet ? '10px' : 0 }}>
            {isTablet && <LogoTablet />}
            {!isTablet ? <NavigationDesktop /> : <NavigationTablet />}
          </Stack>
        </>
      )
    }

    if (status === 'loading' || 'unauthenticated') {
      return (
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ pt: '6px', pb: '8px', mx: { sm: '12px', md: '18px' } }}>
          <LogoDesktop />
          <SearchSectionUnauth />
        </Stack>
      )
    }
  }

  return (
    <>
      <AppBar
        elevation={0}
        position='fixed'
        sx={{
          bgcolor: theme => theme.palette.background.paper,
          width: '100%',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: theme => alpha(theme.palette.primary.main, 0.1),
        }}>
        {AppBarContents()}
      </AppBar>
    </>
  )
}
