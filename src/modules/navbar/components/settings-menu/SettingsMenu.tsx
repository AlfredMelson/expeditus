import React from 'react'

import SettingsSharpIcon from '@mui/icons-material/SettingsSharp'
import IconButton from '@mui/material/IconButton'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'

import { SignUpBenefitsDialog } from '@modules/navbar/components/dialog'
import { ThemeModeToggle, SettingsDivider } from '@modules/navbar/components/settings-menu'

export default function SettingsMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // const handleLanguageSelectionClose = () => {
  //   setSignUpDialogOpen(false)
  // }
  // const [languageDialogOpen, setLanguageDialogOpen] = React.useState(false)
  // const [languageValue, setLanguageValue] = React.useState('Dione')

  // const handleLanguageSelectionClose = (newValue?: string) => {
  //   setLanguageDialogOpen(false)

  //   if (newValue) {
  //     setLanguageValue(newValue)
  //   }
  // }
  // const [regionDialogOpen, setRegionDialogOpen] = React.useState(false)
  // const [regionValue, setRegionValue] = React.useState('Dione')

  // const handleRegionSelectionClose = (newValue?: string) => {
  //   setRegionDialogOpen(false)

  //   if (newValue) {
  //     setRegionValue(newValue)
  //   }
  // }

  const [signupBenefitsDialog, setSignUpBenefitsDialog] = React.useState(false)
  const handleSignupBenefitsOpen = () => {
    setSignUpBenefitsDialog(true)
  }
  const handleSignupBenefitsClose = () => {
    setSignUpBenefitsDialog(false)
  }

  return (
    <>
      <Tooltip title='Settings'>
        <IconButton
          onClick={handleClick}
          sx={{ ml: 2 }}
          aria-controls={open ? 'settings-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
        >
          <SettingsSharpIcon fontSize='medium' />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id='settings-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {/* <MenuItem
          aria-haspopup='true'
          aria-controls='language-menu'
          aria-label='Language'
          onClick={() => setLanguageDialogOpen(true)}>
          <ListItemText primary='Language' secondary={languageValue} />
        </MenuItem>
        <MenuItem
          aria-haspopup='true'
          aria-controls='region-menu'
          aria-label='Region'
          onClick={() => setRegionDialogOpen(true)}>
          <ListItemText primary='Region' secondary={regionValue} />
        </MenuItem> */}
        <MenuItem
          aria-haspopup='true'
          aria-controls='language-menu'
          aria-label='Language'
          onClick={handleSignupBenefitsOpen}
        >
          <ListItemText primary='Settings' />
        </MenuItem>
        <SettingsDivider />
        <ThemeModeToggle />
      </Menu>
      <SignUpBenefitsDialog open={signupBenefitsDialog} handleClose={handleSignupBenefitsClose} />
      {/* <LanguageSelectionDialog
        id='language-menu'
        keepMounted
        open={languageDialogOpen}
        onClose={handleLanguageSelectionClose}
        value={languageValue}
      />
      <RegionSelectionDialog
        id='region-menu'
        keepMounted
        open={regionDialogOpen}
        onClose={handleRegionSelectionClose}
        value={regionValue}
      /> */}
    </>
  )
}
