import { type SxProps } from '@mui/material'
import Button from '@mui/material/Button'

import Link from 'next/link'

interface IMobileMuiButton {
  buttonLink?: string
  buttonSize?: 'small' | 'medium' | 'large'
  buttonText: string
  buttonType?: 'button' | 'submit' | 'reset'
  buttonVariant?: 'text' | 'outlined' | 'contained'
  endIcon?: React.ReactNode
  isDisabled?: boolean
  startIcon?: React.ReactNode
  isLoading?: boolean
  loadingText?: string
  onClick?: () => void
  sx?: SxProps
}

export default function MobileMuiButton({
  buttonLink,
  buttonSize = 'small',
  buttonText,
  buttonType,
  buttonVariant,
  endIcon,
  isDisabled,
  startIcon,
  isLoading,
  loadingText,
  onClick,
  sx,
}: IMobileMuiButton) {
  return (
    <>
      {buttonLink ? (
        <Button
          component={Link}
          disabled={isDisabled}
          type={buttonType}
          size={buttonSize}
          variant={buttonVariant}
          href={buttonLink}
          onClick={onClick}
          endIcon={endIcon}
          startIcon={startIcon}
          sx={sx}>
          {isLoading ? loadingText : buttonText}
        </Button>
      ) : (
        <Button
          disabled={isDisabled}
          type={buttonType}
          size={buttonSize}
          variant={buttonVariant}
          onClick={onClick}
          endIcon={endIcon}
          startIcon={startIcon}
          sx={sx}>
          {isLoading ? loadingText : buttonText}
        </Button>
      )}
    </>
  )
}
