import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'

import { signIn } from 'next-auth/react'

import { MuiButton } from '@modules/common/components/button'

import type { SxProps } from '@mui/material'

interface ISignInButton {
  sx?: SxProps
}

export default function SignInButton({ sx }: ISignInButton) {
  // return production url for callback if in production mode
  const callbackUrlOptions = () => {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:3000'
    }

    return 'https://Expeditus.vercel.app/'
  }

  return (
    <MuiButton
      buttonVariant='outlined'
      buttonText='Sign In'
      endIcon={<LoginOutlinedIcon />}
      onClick={() => signIn('github', { callbackUrl: callbackUrlOptions() })}
      sx={sx}
    />
  )
}
