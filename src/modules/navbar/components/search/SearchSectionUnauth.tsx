import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { HelpMenuUnauth } from '@modules/navbar/components/help-menu'
import { SettingsMenu } from '@modules/navbar/components/settings-menu'
import { SignInButton } from '@modules/navbar/components/sign-button'

const SearchSectionUnauth = () => {
  const theme = useTheme()

  const isTabletAndAbove = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
      {isTabletAndAbove && (
        <Stack direction='row'>
          <HelpMenuUnauth />
          <SettingsMenu />
          <SignInButton sx={{ ml: 3 }} />
        </Stack>
      )}
    </>
  )
}

export default SearchSectionUnauth
