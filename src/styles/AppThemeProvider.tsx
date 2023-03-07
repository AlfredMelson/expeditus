import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material'
import { deepmerge } from '@mui/utils'

import { useDarkMode, useUpdateEffect } from '@modules/common/hooks'
import { AppDesignTokens, AppThemedComponents } from '@src/styles'

import type { PaletteMode } from '@mui/material'

/*
 * Material-ui, by default, provides a theme object that is used by mui components.
 *
 * To see the default theme visit: https://mui.com/material-ui/customization/default-theme/ then click "Expand all". There, you will find the exhustive list of styles that mui components are utilising: breakpoints, palette, spacing, shape, mixings, shadows, typography, transitions, zIndex
 *
 * Learn more about how the theme is assembled, take a look at material-ui/style/createTheme.js, and the related imports which createTheme uses by visiting: https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/createTheme.js
 *
 * AppThemeProvider below, overrides the default theme with a custom theme ONLY for those properties that are re-defined or an augmentation. Properties that are not redefined will remain as they are within the default theme.
 *
 * NOTE: Augmenting (adding new properties) the theme requires declaration within theme.d.ts located at the root of this project.
 */

interface IAppThemeProvider {
  children: React.ReactNode
}

export default function AppThemeProvider({ children }: IAppThemeProvider) {
  const { isDarkMode } = useDarkMode()

  const [mode, setMode] = React.useState<PaletteMode>('dark')

  useUpdateEffect(() => {
    setMode(isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  // defined color palette (theme) object construction
  const designTokens = AppDesignTokens(mode)

  // create a predefined theme object; components set as {}
  const appTheme = createTheme(designTokens)

  // merge predefined mui components into appTheme
  // update the theme only if the mode changes
  const theme = React.useMemo(
    () => createTheme(deepmerge(appTheme, AppThemedComponents(appTheme))),
    [appTheme],
  )

  // note: ThemeProvider provides theme prop down the React tree via context
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
