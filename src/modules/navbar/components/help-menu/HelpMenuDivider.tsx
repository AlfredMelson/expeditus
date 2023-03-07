import Divider from '@mui/material/Divider'

export default function HelpMenuDivider() {
  return (
    <Divider
      sx={{
        '&.MuiButtonBase-root, &.MuiMenuItem-root, &.MuiDivider-root': {
          my: 0,
        },
      }}
    />
  )
}
