import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

import { useDarkMode } from '@modules/common/hooks'

export default function ThemeModeToggleMobile() {
  const { selectedColorMode, setSelectedColorMode, getColorDisplayed } = useDarkMode()

  return (
    <BottomNavigationAction
      label='Theme'
      value=''
      onClick={() =>
        setSelectedColorMode(getColorDisplayed(selectedColorMode) === 'dark' ? 'light' : 'dark')
      }
      icon={
        getColorDisplayed(selectedColorMode) === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
      }
    />
  )
}
