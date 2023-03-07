import React from 'react'

import { useUpdateEffect, useMediaQuery, useLocalStorage } from '@modules/common/hooks'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

type ColorMode = 'system' | 'dark' | 'light'
interface IUseDarkMode {
  isDarkMode: boolean
  selectedColorMode: ColorMode
  setSelectedColorMode: React.Dispatch<React.SetStateAction<ColorMode>>
  toggleColorMode: () => void
  getColorDisplayed: (value: ColorMode) => string
}

function useDarkMode(): IUseDarkMode {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY)
  const [selectedColorMode, setSelectedColorMode] = useLocalStorage<ColorMode>(
    'flora-theme-mode',
    'system',
  )
  const [isDarkMode, setDarkMode] = React.useState<boolean>(isDarkOS)

  // Update darkMode if os prefers changes
  useUpdateEffect(() => {
    if (selectedColorMode === 'system') {
      setDarkMode(isDarkOS)
    }
  }, [isDarkOS])

  React.useEffect(() => {
    switch (selectedColorMode) {
      case 'light':
        setDarkMode(false)
        break
      case 'system':
        setDarkMode(isDarkOS)
        break
      case 'dark':
        setDarkMode(true)
        break
    }
  }, [selectedColorMode, isDarkOS])

  function toggleColorMode() {
    const toggleDict: Record<ColorMode, ColorMode> = {
      light: 'system',
      system: 'dark',
      dark: 'light',
    }
    setSelectedColorMode(prevMode => toggleDict[prevMode])
  }

  // switch statement to change color
  function getColorDisplayed(value: ColorMode) {
    switch (value) {
      case 'system':
        return 'dark'
      case 'dark':
        return 'dark'
      case 'light':
        return 'light'
      default:
        return 'light'
    }
  }

  return {
    isDarkMode,
    selectedColorMode,
    setSelectedColorMode,
    toggleColorMode,
    getColorDisplayed,
  }
}
export default useDarkMode
