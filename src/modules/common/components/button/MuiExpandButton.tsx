import Button from '@mui/material/Button'

interface IMuiExpandButton {
  buttonLink?: string
  buttonSize?: 'small' | 'medium' | 'large'
  buttonText: string
  buttonFontSize?: 14 | 15 | 16
  buttonFontWeight?: 400 | 500 | 600
  buttonType?: 'button' | 'submit' | 'reset'
  buttonVariant?: 'text' | 'outlined' | 'contained'
  endIcon?: React.ReactNode
  isDisabled?: boolean
  startIcon?: React.ReactNode
  isLoading?: boolean
  loadingText?: string
  onClick?: () => void
}

export default function MuiExpandButton({
  buttonSize = 'small',
  buttonText,
  buttonFontSize,
  buttonFontWeight,
  buttonType,
  buttonVariant,
  endIcon,
  isDisabled,
  startIcon,
  isLoading,
  loadingText,
  onClick,
}: IMuiExpandButton) {
  return (
    <Button
      disabled={isDisabled}
      type={buttonType}
      size={buttonSize}
      variant={buttonVariant}
      onClick={onClick}
      endIcon={endIcon}
      startIcon={startIcon}
      sx={theme => ({
        alignSelf: 'flex-start',
        color: theme.palette.text.primary,
        fontSize: buttonFontSize,
        fontWeight: buttonFontWeight,
        ':hover': {
          color: theme.palette.text.primary,
        },
      })}>
      {isLoading ? loadingText : buttonText}
    </Button>
  )
}
