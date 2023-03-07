import { alpha } from '@mui/material/styles'

import AppSwatch from './AppSwatch'

import type { ThemeOptions } from '@mui/material/styles'

const systemFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
]

const AppDesignTokens = (mode: 'dark' | 'light') =>
  ({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    link: {
      main: '#2196F3',
    },
    palette: {
      mode,
      ...(mode === 'dark' && {
        background: {
          paper: AppSwatch.Dark.Black[50],
          default: AppSwatch.Dark.Black[100],
          border: alpha(AppSwatch.Light.White[50], 0.1),
        },
        primary: {
          // light: will be calculated from palette.primary.main,
          main: AppSwatch.Dark.White[50],

          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
          // light: will be calculated from palette.secondary.main,
          main: 'rgb(255, 255, 255)',
          light: '#A9A9A9',
          dark: '#D4D4D4',

          // contrastText: will be calculated to contrast with palette.secondary.main
        },
        info: {
          // light: will be calculated from palette.info.main,
          main: '#2196F3',

          // dark: will be calculated from palette.info.main,
          // contrastText: will be calculated to contrast with palette.info.main
        },
        error: {
          // light: will be calculated from palette.error.main,
          main: '#E75555',

          // dark: will be calculated from palette.error.main,
          // contrastText: will be calculated to contrast with palette.error.main
        },
        success: {
          // light: will be calculated from palette.success.main,
          main: '#38C74F',

          // dark: will be calculated to contrast with palette.success.main
          // contrastText: will be calculated to contrast with palette.success.main
        },
        warning: {
          // light: will be calculated from palette.warning.main,
          main: '#FF9800',

          // dark: will be calculated from palette.warning.main,
          // contrastText: will be calculated to contrast with palette.warning.main
        },
      }),
      ...(mode === 'light' && {
        background: {
          paper: AppSwatch.Light.White[50],
          default: AppSwatch.Light.Grey[50],
          border: alpha(AppSwatch.Dark.Black[50], 0.1),
        },
        primary: {
          // light: will be calculated from palette.primary.main,
          main: '#5f6368',

          // dark: '#A0A0A0',
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
          // light: will be calculated from palette.secondary.main,
          main: 'rgb(255, 255, 255)',
          light: '#A9A9A9',
          dark: '#D4D4D4',

          // contrastText: will be calculated to contrast with palette.secondary.main
        },
        info: {
          // light: will be calculated from palette.info.main,
          main: '#2196F3',

          // dark: will be calculated from palette.info.main,
          // contrastText: will be calculated to contrast with palette.info.main
        },
        error: {
          // light: will be calculated from palette.error.main,
          main: '#E75555',

          // dark: will be calculated from palette.error.main,
          // contrastText: will be calculated to contrast with palette.error.main
        },
        success: {
          // light: will be calculated from palette.success.main,
          main: '#38C74F',

          // dark: will be calculated to contrast with palette.success.main
          // contrastText: will be calculated to contrast with palette.success.main
        },
        warning: {
          // light: will be calculated from palette.warning.main,
          main: '#FF9800',

          // dark: will be calculated from palette.warning.main,
          // contrastText: will be calculated to contrast with palette.warning.main
        },
      }),
    },
    shape: {
      borderRadius: 4, // rem invalid: theme.spacing value can be number, array or function
    },
    spacing: 8, // rem invalid: theme.spacing value can be number, array or function
    spacingIcons: 1,
    typography: {
      fontFamily: ['"Roboto"', '"Open Sans"', ...systemFont].join(','),
      h1: {
        fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
        fontWeight: 800,
        lineHeight: 78 / 70,
      },
      h2: {
        fontSize: 'clamp(2.14rem, 1.74rem + 1.99vw, 3.16rem)',
        fontWeight: 700,
        lineHeight: 44 / 36,
      },
      h3: {
        fontSize: 'clamp(1.71rem, 1.45rem + 1.29vw, 2.37rem)',
        lineHeight: 44 / 36,
        letterSpacing: 0.2,
      },
      h4: {
        fontSize: 'clamp(1.37rem, 1.21rem + 0.8vw, 1.78rem)',
        lineHeight: 42 / 28,
        letterSpacing: 0.2,
      },
      h5: {
        fontSize: 'clamp(1.09rem, 1rem + 0.47vw, 1.33rem)',
        lineHeight: 36 / 24,
        letterSpacing: 0.1,
      },
      h6: {
        fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
        lineHeight: 30 / 20,
      },
      body1: {
        fontSize: '0.875rem',
      },
      body2: {
        fontSize: '0.75rem',
      },
    },
    transitions: {
      duration: {
        shortest: 150,
        standard: 300,
        complex: 500,

        // recommended when something is entering screen
        enteringScreen: 225,

        // recommended when something is leaving screen
        leavingScreen: 195,
      },
      easing: {
        // most common easing curve
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

        // enter at full velocity and slowly decelerate to a resting point
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',

        // leave at full velocity without decelerating
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',

        // sharp curve is used by objects that may return at any time
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
  } as unknown as ThemeOptions)

export default AppDesignTokens
