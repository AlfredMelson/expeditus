import Divider from '@mui/material/Divider'

export default function SettingsDivider() {
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
