import type { Theme } from '@mui/material/styles'

export default function AppThemedComponents(theme: Theme) {
  return {
    components: {
      MuiAccordion: {
        defaultProps: {},
        styleOverrides: {
          root: { boxShadow: 'none', backgroundImage: 'none' }, // Styles applied to the root element
        },
      },
      MuiAccordionSummary: {
        defaultProps: {},
        styleOverrides: {
          root: {
            color: theme.palette.primary.light,
            transition: theme.transitions.create('all', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            '&:hover': {
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
            },
            '& .Mui-expanded': {
              color: theme.palette.mode === 'dark' ? '#8ab4f8' : '#1a73e8',
            },
          }, // Styles applied to the root element
        },
      },
      MuiAlert: {
        defaultProps: {},
        styleOverrides: {
          root: {
            paddingTop: 0,
            paddingBottom: 0,
            ...theme.typography.body1,
            fontWeight: theme.typography.fontWeightMedium,
          }, // Styles applied to the root element
          filled: {}, // Styles applied to the root element if variant="filled"
          outlined: {}, // Styles applied to the root element if variant="outlined"
          standard: {}, // Styles applied to the root element if variant="standard"
          standardSuccess: {}, // Styles applied to the root element if variant="standard" and color="success"
          standardInfo: {}, // Styles applied to the root element if variant="standard" and color="info"
          standardWarning: {}, // Styles applied to the root element if variant="standard" and color="warning"
          standardError: {}, // Styles applied to the root element if variant="standard" and color="error"
          outlinedSuccess: {}, // Styles applied to the root element if variant="outlined" and color="success"
          outlinedInfo: {}, // Styles applied to the root element if variant="outlined" and color="info"
          outlinedWarning: {}, // Styles applied to the root element if variant="outlined" and color="warning"
          outlinedError: {}, // Styles applied to the root element if variant="outlined" and color="error"
          filledSuccess: {}, // Styles applied to the root element if variant="filled" and color="success"
          filledInfo: {}, // Styles applied to the root element if variant="filled" and color="info"
          filledWarning: {}, // Styles applied to the root element if variant="filled" and color="warning"
          filledError: {}, // Styles applied to the root element if variant="filled" and color="error"
          icon: { fontSize: '1.4rem', paddingTop: '0.5rem' }, // Styles applied to the icon wrapper element
          message: { paddingTop: '0.55rem', paddingRight: '1rem' }, // Styles applied to the message wrapper element
          action: {}, // Styles applied to the action wrapper element if action is provided
        },
      },
      MuiAlertTitle: {
        defaultProps: {},
        styleOverrides: {
          root: { ...theme.typography.body1 }, // Styles applied to the root element
        },
      },
      MuiAppBar: {
        defaultProps: {
          position: 'static',
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
        },
      },
      MuiBadge: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
        },
      },
      MuiBottomNavigation: {
        defaultProps: {},
        styleOverrides: {
          root: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'transparent',
            backdropFilter: 'saturate(180%) blur(20px)',
            zIndex: theme.zIndex.modal,
          }, // Styles applied to the root element
        },
      },
      MuiBottomNavigationAction: {
        defaultProps: {},
        styleOverrides: {
          root: {
            '& .MuiSvgIcon-root': {
              color: '#8b949e',
              transition: theme.transitions.create('all', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              '& .Mui-selected': {
                cursor: 'default',
                color: theme.palette.mode === 'dark' ? '#8ab4f8' : '#1a73e8',
              },
            },
          }, // Styles applied to the root element
          label: {
            fontSize: '11px',
            marginTop: '2px',
            color: '#8b949e',
            transition: theme.transitions.create('all', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            '& .Mui-selected': {
              cursor: 'default',
              color: theme.palette.mode === 'dark' ? '#8ab4f8' : '#1a73e8',
            },
          }, // Styles applied to the label wrapper element
        },
      },
      MuiButton: {
        defaultProps: {
          disableFocusRipple: false,
          disableRipple: true,
          variant: 'contained',
        },
        styleOverrides: {
          root: {
            ...theme.typography.body1,
            textTransform: 'none',
            transition: theme.transitions.create('all', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }, // Styles applied to the root element
          text: {
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.primary.light,
            '&:hover': {
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              backgroundColor: 'transparent',
            },
          }, // Styles applied to the root element if variant="text"
          textInherit: {}, // Styles applied to the root element if variant="text" and color="inherit"
          textPrimary: {}, // Styles applied to the root element if variant="text" and color="primary"
          textSecondary: {}, // Styles applied to the root element if variant="text" and color="secondary"
          outlined: {
            color: '#FFFFFF',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }, // Styles applied to the root element if variant="outlined"
          outlinedInherit: {}, // Styles applied to the root element if variant="outlined" and color="inherit"
          outlinedPrimary: {}, // Styles applied to the root element if variant="outlined" and color="primary"
          outlinedSecondary: {}, // Styles applied to the root element if variant="outlined" and color="secondary"
          contained: {
            color: '#FFFFFF',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }, // Styles applied to the root element if variant="contained"
          containedInherit: {}, // Styles applied to the root element if variant="contained" and color="inherit"
          containedPrimary: {}, // Styles applied to the root element if variant="contained" and color="primary"
          containedSecondary: {}, // Styles applied to the root element if variant="contained" and color="secondary"
          disableElevation: {}, // Styles applied to the root element if disableElevation={true}.
          focusVisible: {}, // State class applied to the ButtonBase root element if the button is keyboard focused
          disabled: {}, // State class applied to the root element if disabled={true}
          colorInherit: {}, // Styles applied to the root element if color="inherit"
          textSizeSmall: {}, // Styles applied to the root element if size="small" and variant="text"
          textSizeMedium: {}, // Styles applied to the root element if size="medium" and variant="text"
          textSizeLarge: {}, // Styles applied to the root element if size="large" and variant="text"
          outlinedSizeSmall: {}, // Styles applied to the root element if size="small" and variant="outlined"
          outlinedSizeMedium: {}, // Styles applied to the root element if size="medium" and variant="outlined"
          outlinedSizeLarge: {}, // Styles applied to the root element if size="large" and variant="outlined"
          containedSizeSmall: {}, // Styles applied to the root element if size="small" and variant="contained"
          containedSizeMedium: {}, // Styles applied to the root element if size="medium" and variant="contained"
          containedSizeLarge: {}, // Styles applied to the root element if size="large" and variant="contained"
          sizeSmall: {}, // Styles applied to the root element if size="small"
          sizeMedium: {}, // Styles applied to the root element if size="medium"
          sizeLarge: {}, // Styles applied to the root element if size="large"
          fullWidth: {}, // Styles applied to the root element if fullWidth={true}
          startIcon: {}, // Styles applied to the startIcon element if supplied
          endIcon: {}, // Styles applied to the endIcon element if supplied
          iconSizeSmall: {}, // Styles applied to the icon element if supplied and size="small"
          iconSizeMedium: {}, // Styles applied to the icon element if supplied and size="medium"
          iconSizeLarge: {}, // Styles applied to the icon element if supplied and size="large"
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
          focusRipple: false,
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
          disabled: {}, // State class applied to the root element if disabled={true}.
          focusVisible: {}, // State class applied to the root element if keyboard focused.
        },
      },
      MuiCard: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
        },
      },
      MuiCardContent: {
        defaultProps: {},
        styleOverrides: {
          root: {
            paddingTop: 0,
            paddingRight: 0,
            paddingLeft: 0,
            paddingBottom: 0,
            ':last-of-type': {
              paddingBottom: 0,
            },
          }, // Styles applied to the root element
        },
      },
      MuiCheckbox: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: { color: theme.palette.primary.main }, // State Styles applied to the root element.
          checked: {}, // State State class applied to the root element if checked={true}.
          disabled: {}, // State State class applied to the root element if disabled={true}.
          indeterminate: {}, // State State class applied to the root element if indeterminate={true}.
          colorPrimary: {}, // State Styles applied to the root element if color="primary".
          colorSecondary: {
            color: theme.palette.primary.main,
            '& .Mui-checked': {
              color: theme.palette.primary.main,
            },
          }, // State Styles applied to the root element if color="secondary".
        },
      },
      MuiChip: {
        defaultProps: {
          size: 'small',
          variant: 'filled',
        },
        styleOverrides: {
          root: {
            borderRadius: '4px',
            color: theme.palette.primary.main,
            transition: theme.transitions.create('all', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            '&:hover': {
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
            },
          }, // Styles applied to the root element
          sizeSmall: {
            '& .MuiButtonBase-root': {
              height: '24px',
              borderRadius: '4px',
              color: theme.palette.primary.main,
              transition: theme.transitions.create('all', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              '&:hover': {
                color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              },
            },
          }, // Styles applied to the root element if size="small"
          sizeMedium: {
            '& .MuiButtonBase-root': {
              height: '36px',
            },
          }, // Styles applied to the root element if size="medium"
          colorPrimary: {}, // Styles applied to the root element if color="primary"
          colorSecondary: {}, // Styles applied to the root element if color="secondary"
          disabled: {}, // State class applied to the root element if disabled={true}
          clickable: {}, // Styles applied to the root element if onClick is defined or clickable={true}
          clickableColorPrimary: {}, // Styles applied to the root element if onClick and color="primary" is defined or clickable={true}
          clickableColorSecondary: {}, // Styles applied to the root element if onClick and color="secondary" is defined or clickable={true}
          deletable: {}, // Styles applied to the root element if onDelete is defined
          deletableColorPrimary: {}, // Styles applied to the root element if onDelete and color="primary" is defined
          deletableColorSecondary: {}, // Styles applied to the root element if onDelete and color="secondary" is defined
          outlined: {}, // Styles applied to the root element if variant="outlined"
          filled: {}, // Styles applied to the root element if variant="filled"
          outlinedPrimary: {}, // Styles applied to the root element if variant="outlined" and color="primary"
          outlinedSecondary: {}, // Styles applied to the root element if variant="outlined" and color="secondary"
          avatar: {}, // Styles applied to the avatar element
          avatarSmall: {}, // Styles applied to the avatar element if size="small"
          avatarMedium: {}, // Styles applied to the avatar element if size="medium"
          avatarColorPrimary: {}, // Styles applied to the avatar element if color="primary"
          avatarColorSecondary: {}, // Styles applied to the avatar element if color="secondary"
          icon: {}, // Styles applied to the icon element
          iconSmall: {
            fontSize: '16px',
            color: theme.palette.primary.main,
          }, // Styles applied to the icon element if size="small"
          iconMedium: {}, // Styles applied to the icon element if size="medium"
          iconColorPrimary: {}, // Styles applied to the icon element if color="primary"
          iconColorSecondary: {}, // Styles applied to the icon element if color="secondary"
          label: {}, // Styles applied to the label `span` element
          labelSmall: {
            fontFamily: 'Roboto',
            fontSize: '12px',
            fontWeight: theme.typography.fontWeightMedium,
            paddingRight: '0.625rem',
          }, // Styles applied to the label `span` element if size="small"
          labelMedium: {}, // Styles applied to the label `span` element if size="medium"
          deleteIcon: {}, // Styles applied to the deleteIcon element
          deleteIconSmall: {}, // Styles applied to the deleteIcon element if size="small"
          deleteIconMedium: {}, // Styles applied to the deleteIcon element if size="medium"
          deleteIconColorPrimary: {}, // Styles applied to the deleteIcon element if color="primary" and variant="filled"
          deleteIconColorSecondary: {}, // Styles applied to the deleteIcon element if color="secondary" and variant="filled"
          deleteIconOutlinedColorPrimary: {}, // Styles applied to the deleteIcon element if color="primary" and variant="outlined"
          deleteIconOutlinedColorSecondary: {}, // Styles applied to the deleteIcon element if color="secondary" and variant="outlined"
          focusVisible: {}, // State class applied to the root element if keyboard focused
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: false,
        },
        styleOverrides: {},
      },
      MuiDialog: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root
          paperFullWidth: {
            [theme.breakpoints.down('sm')]: {
              width: "calc(100% - '0.5rem)",
              margin: '0.5rem',
            },
          }, // Styles applied to the Paper component if fullWidth={true}.
        },
      },
      MuiDialogContent: {
        defaultProps: {},
        styleOverrides: {
          root: { padding: 0 }, // Styles applied to the root
        },
      },
      MuiDivider: {
        defaultProps: { variant: 'middle' },
        styleOverrides: {
          root: {}, // Styles applied to the root
        },
      },
      MuiDrawer: {
        defaultProps: {},
        styleOverrides: {
          root: {
            // backgroundColor: 'transparent',
            // backdropFilter: 'saturate(180%) blur(20px)',
            // background: 'rgba(0,0,0,0.72)',
            // '& .MuiDrawer-paper': {
            //   backgroundColor: 'transparent',
            // },
          }, // Styles applied to the root
        },
      },
      MuiFormControl: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          marginNormal: {}, // Styles applied to the select component if variant="standard"
          marginDense: {}, // Styles applied to the root element if margin="dense"
          fullWidth: {}, // Styles applied to the root element if fullWidth={true}
        },
      },
      MuiFormLabel: {
        defaultProps: {},
        styleOverrides: {
          root: { color: theme.palette.primary.main }, // Styles applied to the root element
          colorSecondary: {}, // Styles applied to the root element if the color is secondary.
          focused: {}, // State class applied to the root element if focused={true}.
          disabled: {}, // State class applied to the root element if disabled={true}.
          error: {}, // State class applied to the root element if error={true}.
          filled: {}, // State class applied to the root element if filled={true}.
          required: {}, // State class applied to the root element if required={true}.
          asterisk: {}, // Styles applied to the asterisk element.
        },
      },
      MuiIcon: {
        defaultProps: {
          fontSize: 'small',
        },
        styleOverrides: {
          root: {
            // height: 'auto',
            // width: 'auto',
            // color: theme.palette.primary.main,
            // transition: theme.transitions.create('all', {
            //   easing: theme.transitions.easing.sharp,
            //   duration: theme.transitions.duration.leavingScreen,
            // }),
            // '&:hover': {
            //   color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
            // },
          }, // Styles applied to the root element
        },
      },
      MuiIconButton: {
        defaultProps: {
          size: 'small',
          disableFocusRipple: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            color: theme.palette.primary.main,
            transition: theme.transitions.create('all', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            '&:hover': {
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
            },
          }, // Styles applied to the root element
        },
      },
      MuiInput: {
        defaultProps: {
          disableUnderline: true,
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
          formControl: {}, // Styles applied to the root element if the component is a descendant of FormControl
          focused: {}, // Styles applied to the root element if the component is focused
          disabled: {}, // Styles applied to the root element if disabled={true}
          colorSecondary: {}, // Styles applied to the root element if color secondary
          underline: {}, // Styles applied to the root element unless disableUnderline={true}
          error: {}, // State class applied to the root element if error={true}
          sizeSmall: {}, // Styles applied to the input element if size="small"
          multiline: {}, // Styles applied to the root element if multiline={true}
          fullWidth: {}, // Styles applied to the root element if fullWidth={true}
          input: {}, // Styles applied to the input element
          inputSizeSmall: {}, // Styles applied to the input element if size="small"
          inputMultiline: {}, // Styles applied to the input element if multiline={true}
          inputTypeSearch: {}, // Styles applied to the input element if type="search"
        },
      },
      MuiInputAdornment: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          filled: {}, // Styles applied to the root element if variant="filled"
          outlined: {}, // Styles applied to the root element if variant="outlined"
          standard: {}, // Styles applied to the root element if variant="standard"
          positionStart: {
            zIndex: 4,
          }, // Styles applied to the root element if position="start"
          positionEnd: {}, // Styles applied to the root element if position="end"
          disablePointerEvents: {}, // Styles applied to the root element if disablePointerEvents={true}
          hiddenLabel: {}, // Styles applied if the adornment is used inside
          sizeSmall: {}, // Styles applied if the adornment is used inside
        },
      },
      MuiInputBase: {
        defaultProps: {},
        styleOverrides: {
          root: {
            ...theme.typography.h6,
            color: theme.palette.primary.main,
            transition: theme.transitions.create('all', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            '&:hover': {
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
            },
            '& .Mui-selected': {
              cursor: 'default',
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
            },
          }, // Styles applied to the root element
          colorPrimary: {}, // Styles applied to the root element if color="primary"
        },
      },
      MuiList: {
        defaultProps: {
          disablePadding: true,
        },
        styleOverrides: {
          root: { ...theme.typography.body1 }, // Styles applied to the root element
          padding: {}, // Styles applied to the root element unless disablePadding={true}.
          dense: {}, // Styles applied to the root element if dense.
          subheader: {}, // Styles applied to the root element if a subheader is provided.
        },
      },
      MuiListItem: {
        defaultProps: {},
        styleOverrides: {
          root: { backgroundColor: 'grey', height: '39px', borderRadius: '3px' }, // Styles applied to the root element
          container: {}, // Styles applied to the container element if children includes ListItemSecondaryAction
          focusVisible: {}, // State class applied to the `component`'s `focusVisibleClassName` prop if button={true}
          dense: {}, // Styles applied to the component element if dense
          alignItemsFlexStart: {}, // Styles applied to the component element if alignItems="flex-start"
          disabled: {}, // State class applied to the inner `component` element if disabled={true}
          divider: {}, // Styles applied to the inner `component` element if divider={true}
          gutters: {}, // Styles applied to the inner `component` element unless disableGutters={true}
          padding: {}, // Styles applied to the root element unless disablePadding={true}
          button: {}, // Styles applied to the inner `component` element if button={true}
          secondaryAction: {}, // Styles applied to the component element if children includes ListItemSecondaryAction
          selected: {}, // State class applied to the root element if selected={true}
        },
      },
      MuiListItemIcon: {
        defaultProps: {},
        styleOverrides: {
          root: { color: theme.palette.primary.main }, // Styles applied to the root element
          alignItemsFlexStart: {}, // Styles applied to the root element when the parent ListItem uses alignItems="flex-start"
        },
      },
      MuiListItemText: {
        defaultProps: {},
        styleOverrides: {
          root: { ...theme.typography.body1 }, // Styles applied to the root element
          multiline: {}, // Styles applied to the Typography component if primary and secondary are set
          dense: {}, // Styles applied to the Typography component if dense.
          inset: {}, // Styles applied to the root element if inset={true}.
          primary: {}, // Styles applied to the primary `Typography` component.
          secondary: {}, // Styles applied to the secondary `Typography` component.
        },
      },
      MuiMenu: {
        defaultProps: {
          anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
          transformOrigin: { horizontal: 'center', vertical: 'top' },
          PaperProps: {
            elevation: 0,
            sx: {
              backgroundColor: theme.palette.mode === 'dark' ? '#2F3034' : '#FFFFFF',
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
            },
          },
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
          paper: {}, // Styles applied to the Paper component
          list: {
            paddingTop: 0,
            paddingBottom: 0,
          }, // Styles applied to the List component via `MenuList`
        },
      },
      MuiMenuItem: {
        defaultProps: {},
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            [theme.breakpoints.down('sm')]: {
              ...theme.typography.body2,
            },
          }, // Styles applied to the root element
          focusVisible: {}, // State class applied to the root element if keyboard focused
          dense: {}, // Styles applied to the root element if dense
          disabled: {}, // State class applied to the root element if disabled={true}
          divider: {}, // Styles applied to the root element if divider={true}
          gutters: {}, // Styles applied to the inner `component` element unless disableGutters={true}
          selected: {}, // State class applied to the root element if selected={true}
        },
      },
      MuiMenuList: {
        defaultProps: {},
        styleOverrides: {
          root: { color: theme.palette.primary.main }, // Styles applied to the root element
          focusVisible: {}, // State class applied to the root element if keyboard focused
          dense: {}, // Styles applied to the root element if dense
          disabled: {}, // State class applied to the root element if disabled={true}
          divider: {}, // Styles applied to the root element if divider={true}
          gutters: {}, // Styles applied to the inner `component` element unless disableGutters={true}
          selected: {}, // State class applied to the root element if selected={true}
        },
      },
      MuiOutlinedInput: {
        defaultProps: {},
        styleOverrides: {
          root: {
            marginTop: '0.063rem', // 1px
          }, // Styles applied to the root element
        },
      },
      MuiPagination: {
        defaultProps: {
          color: 'primary',
          siblingCount: 1,
          boundaryCount: 2,
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
          ul: {}, // Styles applied to the ul element.
          outlined: {}, // Styles applied to the root element if variant="outlined".
          text: {}, // Styles applied to the root element if variant="text".
        },
      },
      MuiPaginationItem: {
        defaultProps: {
          color: 'primary',
        },
        styleOverrides: {
          root: {
            '& .Mui-selected': {
              cursor: 'default',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },
            '& .Mui-disabled': {
              backgroundColor: 'transparent',
            },
          }, // Styles applied to the root element
          page: {}, // Styles applied to the root element if type="page".
          sizeSmall: {}, // Styles applied to the root element if size="small".
          sizeLarge: {}, // Styles applied to the root element if size="large".
          text: {}, // Styles applied to the root element if variant="text".
          textPrimary: {}, // Styles applied to the root element if variant="text" and color="primary".
          textSecondary: {}, // Styles applied to the root element if variant="text" and color="secondary".
          outlined: {}, // Styles applied to the root element if variant="outlined".
          outlinedPrimary: {}, // Styles applied to the root element if variant="outlined" and color="primary".
          outlinedSecondary: {}, // Styles applied to the root element if variant="outlined" and color="secondary".
          rounded: {
            backgroundColor: 'transparent',
            '&:hover': {},
            '& .Mui-selected': {
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },
          }, // Styles applied to the root element if rounded="true".
          ellipsis: {}, // Styles applied to the root element if type="start-ellipsis" or type="end-ellipsis".
          firstLast: {}, // Styles applyed to the root element if `type="first"` or type="last".
          previousNext: {}, // Styles applyed to the root element if `type="previous"` or type="next".
          focusVisible: {}, // State class applied to the root element if keyboard focused.
          disabled: {}, // State class applied to the root element if disabled={true}.
          selected: {}, // State class applied to the root element if selected={true}.
          icon: {}, // Styles applied to the icon to display.
        },
      },
      MuiPaper: {
        defaultProps: {},
        styleOverrides: {
          root: {
            '&:focus': {
              outline: 'none',
            },
          }, // Styles applied to the root element
        },
      },
      MuiPopper: {
        defaultProps: { placement: 'bottom' },
        styleOverrides: {
          root: {}, // Styles applied to the root element
        },
      },
      MuiSelect: {
        defaultProps: {
          variant: 'standard',
        },
        styleOverrides: {
          select: { color: theme.palette.primary.main, backgroundColor: 'transparent' }, // Styles applied to the select component `select` class.
          multiple: {}, // Styles applied to the select component if multiple={true}.
          filled: {}, // Styles applied to the select component if variant="filled".
          outlined: {}, // Styles applied to the select component if variant="outlined".
          standard: {}, // Styles applied to the select component if variant="standard".
          disabled: {}, // State class applied to the select component `disabled` class.
          icon: {
            top: 'calc(50% - 0.8rem)',
            color: theme.palette.primary.main,
          }, // Styles applied to the icon component.
          iconOpen: {}, // Styles applied to the icon component if the popup is open.
          iconFilled: {}, // Styles applied to the icon component if variant="filled".
          iconOutlined: {}, // Styles applied to the icon component if variant="outlined".
          iconStandard: {}, // Styles applied to the icon component if variant="standard".
          nativeInput: {}, // Styles applied to the underlying native input component.
        },
      },
      MuiSnackbar: {
        defaultProps: {
          autoHideDuration: 5000, // 5 seconds in milliseconds
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
          anchorOriginTopCenter: {}, // Styles applied to the root element if anchorOrigin={{ 'top', 'center' }}
          anchorOriginBottomCenter: {}, // Styles applied to the root element if anchorOrigin={{ 'bottom', 'center' }}
          anchorOriginTopRight: {}, // Styles applied to the root element if anchorOrigin={{ 'top', 'right' }}
          anchorOriginBottomRight: {}, // Styles applied to the root element if anchorOrigin={{ 'bottom', 'right' }}
          anchorOriginTopLeft: {}, // Styles applied to the root element if anchorOrigin={{ 'top', 'left' }}
          anchorOriginBottomLeft: {}, // Styles applied to the root element if anchorOrigin={{ 'bottom', 'left' }}
        },
      },
      MuiSnackbarContent: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          message: {}, // Styles applied to the message wrapper element
          action: {}, // Styles applied to the action wrapper element if action is provided
        },
      },
      MuiStepper: {
        defaultProps: {},
        styleOverrides: {
          root: {
            paddingBottom: '0.5rem',
            paddingTop: 0,
          }, // Styles applied to the root element
          horizontal: {}, // Styles applied to the root element if orientation="horizontal".
          vertical: {}, // Styles applied to the root element if orientation="vertical".
          alternativeLabel: {}, // Styles applied to the root element if alternativeLabel={true}.
        },
      },
      MuiSvgIcon: {
        defaultProps: {
          fontSize: 'small',
        },
        styleOverrides: {
          root: {
            color: theme.palette.primary.main,
            transition: theme.transitions.create('all', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            '&:hover': {
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
            },
          }, // Styles applied to the root element
          colorPrimary: {}, // Styles applied to the root element if color="primary"
          colorSecondary: {}, // Styles applied to the root element if color="secondary"
          colorAction: {}, // Styles applied to the root element if color="action"
          colorError: {}, // Styles applied to the root element if color="error"
          colorDisabled: {}, // Styles applied to the root element if color="disabled"
          fontSizeInherit: {}, // Styles applied to the root element if fontSize="inherit"
          fontSizeSmall: {}, // Styles applied to the root element if fontSize="small"
          fontSizeLarge: {}, // Styles applied to the root element if fontSize="large"
        },
      },
      MuiSwitch: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          colorSecondary: { color: theme.palette.primary.main }, // Styles applied to the internal SwitchBase component's root element if color="secondary"
        },
      },
      MuiTab: {
        defaultProps: {
          disableFocusRipple: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            ...theme.typography.body1,
            fontWeight: 500,
            textTransform: 'none',
            color: theme.palette.mode === 'dark' ? '#58a6ff' : '#58a6ff',
            transition: theme.transitions.create('all', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            '&:hover': {
              color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
            },
            '& .Mui-selected': {
              cursor: 'default',
              color: theme.palette.text.primary,
            },
          }, // Styles applied to the root element
          labelIcon: {}, // Styles applied to the root element if both icon and label are provided
          textColorInherit: {}, // Styles applied to the root element if the parent [Tabs](/material-ui/api/tabs/) has textColor="inherit"
          textColorPrimary: {}, // Styles applied to the root element if the parent [Tabs](/material-ui/api/tabs/) has textColor="primary"
          textColorSecondary: {}, // Styles applied to the root element if the parent [Tabs](/material-ui/api/tabs/) has textColor="secondary"
          selected: {}, // State class applied to the root element if selected={true} (controlled by the Tabs component)
          disabled: {}, // State class applied to the root element if disabled={true} (controlled by the Tabs component)
          fullWidth: {}, // Styles applied to the root element if fullWidth={true} (controlled by the Tabs component)
          wrapped: {}, // Styles applied to the root element if wrapped={true}
          iconWrapper: {
            flexDirection: 'row',
          }, // Styles applied to the wrapper element of `icon` if icon is provided
        },
      },
      MuiTabs: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          vertical: {}, // Styles applied to the root element if orientation="vertical".
          flexContainer: {}, // Styles applied to the flex container element
          flexContainerVertical: {}, // Styles applied to the flex container element if orientation="vertical"
          centered: {}, // Styles applied to the flex container element if centered={true} & !variant="scrollable"
          scroller: {}, // Styles applied to the tablist element
          fixed: {}, // Styles applied to the tablist element if !variant="scrollable"
          scrollableX: {}, // Styles applied to the tablist element if variant="scrollable" and orientation="horizontal"
          scrollableY: {}, // Styles applied to the tablist element if variant="scrollable" and orientation="vertical"
          hideScrollbar: {}, // Styles applied to the tablist element if variant="scrollable" and visibleScrollbar={false}
          scrollButtons: {}, // Styles applied to the ScrollButtonComponent component.
          scrollButtonsHideMobile: {}, // Styles applied to the ScrollButtonComponent component if allowScrollButtonsMobile={true}
          indicator: {
            // backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1a73e8',
            backgroundColor: 'transparent',
            height: '2px',
          }, // Styles applied to the TabIndicator component
        },
      },
      MuiTable: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          stickyHeader: {}, // Styles applied to the root element if stickyHeader={true}
        },
      },
      MuiTableBody: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
        },
      },
      MuiTableCell: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: { ...theme.typography.body1 }, // Styles applied to the root element
          head: {}, // Styles applied to the root element if variant="head" or context.table.head
          body: {}, // Styles applied to the root element if variant="body" or context.table.body
          footer: {}, // Styles applied to the root element if variant="footer" or context.table.footer
          sizeSmall: {}, // Styles applied to the root element if size="small"
          sizeMedium: {}, // Styles applied to the root element if size="medium"
          paddingCheckbox: {}, // Styles applied to the root element if padding="checkbox"
          paddingNone: {}, // Styles applied to the root element if padding="none"
          alignLeft: {}, // Styles applied to the root element if align="left"
          alignCenter: {}, // Styles applied to the root element if align="center"
          alignRight: {}, // Styles applied to the root element if align="right"
          alignJustify: {}, // Styles applied to the root element if align="justify"
          stickyHeader: {}, // Styles applied to the root element if context.table.stickyHeader={true}
        },
      },
      MuiTableRow: {
        defaultProps: {
          hover: true,
          selected: true,
        },
        styleOverrides: {
          root: {
            cursor: 'pointer',
            '& .Mui-selected': {},
          }, // Styles applied to the root element
          selected: {}, // State class applied to the root element if selected={true}
          hover: {}, // State class applied to the root element if hover={true}
          head: {}, // Styles applied to the root element if table variant="head"
          footer: {}, // Styles applied to the root element if table variant="footer"
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small',
          margin: 'dense',
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
        },
      },
      MuiToggleButtonGroup: {
        defaultProps: {
          color: 'primary',
          size: 'small',
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
        },
      },
      MuiToolbar: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: false, // If true, adds an arrow to the tooltip
          enterDelay: 400, // ms to wait before showing the tooltip
          enterNextDelay: 50, // ms to wait before showing the tooltip when one was already recently opened
          enterTouchDelay: 800, // ms a user must touch the element before showing the tooltip
          leaveDelay: 50, // ms to wait before hiding the tooltip
          leaveTouchDelay: 1000, // ms after the user stops touching an element before hiding the tooltip
          placement: 'bottom', // position the tooltip will appear, 'bottom' is default
        },
        styleOverrides: {
          arrow: {}, // Styles applied to the arrow element
          popper: {}, // Styles applied to the Popper component.
          popperInteractive: {}, // Styles applied to the Popper component unless disableInteractive={true}
          popperArrow: {}, // Styles applied to the Popper component if arrow={true}
          popperClose: {}, // Styles applied to the Popper component unless the tooltip is open
          tooltip: {}, // Styles applied to the tooltip (label wrapper) element
          tooltipArrow: {}, // Styles applied to the tooltip (label wrapper) element if arrow={true}
          touch: {}, // Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch
          tooltipPlacementLeft: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "left"
          tooltipPlacementRight: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "right"
          tooltipPlacementTop: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "top"
          tooltipPlacementBottom: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "bottom"
        },
      },
      MuiTypography: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element if variant="root"
          body1: {}, // Styles applied to the root element if variant="body1"
          body2: {}, // Styles applied to the root element if variant="body2"
          caption: {}, // Styles applied to the root element if variant="caption"
          button: {}, // Styles applied to the root element if variant="button"
          h1: {}, // Styles applied to the root element if variant="h1"
          h2: {}, // Styles applied to the root element if variant="h2"
          h3: {}, // Styles applied to the root element if variant="h3"
          h4: {}, // Styles applied to the root element if variant="h4"
          h5: {}, // Styles applied to the root element if variant="h5"
          h6: {}, // Styles applied to the root element if variant="h6"
          subtitle1: {}, // Styles applied to the root element if variant="subtitle1"
          subtitle2: {}, // Styles applied to the root element if variant="subtitle2"
          overline: {}, // Styles applied to the root element if variant="overline"
          noWrap: {}, // Styles applied to the root element if variant="noWrap"
          gutterBottom: {}, // Styles applied to the root element if variant="gutterBottom"
          paragraph: {}, // Styles applied to the root element if variant="paragraph"
        },
      },
    },
  }
}
