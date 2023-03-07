import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'

import { useDarkMode } from '@modules/common/hooks'

export default function ThemeModeToggle() {
  const { selectedColorMode, setSelectedColorMode, getColorDisplayed } = useDarkMode()

  // capitalise theme text
  const themeName =
    getColorDisplayed(selectedColorMode).charAt(0).toUpperCase() +
    getColorDisplayed(selectedColorMode).slice(1)

  return (
    <MenuItem
      onClick={() =>
        setSelectedColorMode(getColorDisplayed(selectedColorMode) === 'dark' ? 'light' : 'dark')
      }
    >
      <ListItemText primary={`${themeName === 'Dark' ? 'Light' : 'Dark'} theme`} />
      <ListItemIcon sx={{ paddingLeft: 2, color: 'inherit' }}>
        {getColorDisplayed(selectedColorMode) === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </ListItemIcon>
    </MenuItem>
  )
}
