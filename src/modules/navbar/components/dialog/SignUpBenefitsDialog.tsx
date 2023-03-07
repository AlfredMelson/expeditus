import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

import { MuiButton } from '@modules/common/components/button'
import { SignInButton } from '@modules/navbar/components/sign-button'
import { TEXT } from '@modules/navbar/constants'

import signupBenefitsImage from '../../../../../public/assets/signup-benefits.webp'

const DialogSx = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

interface ISignUpBenefitsDialog {
  open: boolean
  handleClose: () => void
}

export default function SignUpBenefitsDialog({ open, handleClose }: ISignUpBenefitsDialog) {
  return (
    <DialogSx onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
      <DialogContent sx={{ padding: 0, margin: 0 }}>
        <Stack direction='column' justifyContent='center' alignItems='center'>
          <Stack direction='column' justifyContent='center' alignItems='center'>
            <Image
              src={signupBenefitsImage}
              alt='Sign Up Benefits Dialog'
              width={512}
              height={276}
            />
            {TEXT.SIGNUP_BENEFITS_PRIMARY.map((constant, index) => (
              <Typography
                key={index}
                variant={'body1'}
                gutterBottom
                sx={{
                  fontWeight: theme => theme.typography.fontWeightRegular,
                  fontSize: { xs: '17px', sm: '20px' },
                }}
              >
                {constant.text}
              </Typography>
            ))}
          </Stack>
          <Stack direction='column' justifyContent='center' alignItems='flex-start' sx={{ my: 2 }}>
            {TEXT.SIGNUP_BENEFITS_SECONDARY.map((constant, index) => (
              <Typography
                key={index}
                variant='h5'
                component={'li'}
                gutterBottom
                sx={{
                  fontWeight: theme => theme.typography.fontWeightLight,
                  fontSize: { xs: '17px', sm: '20px' },
                }}
              >
                {constant.text}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ mb: 1 }}>
        <MuiButton
          buttonVariant='text'
          buttonText='No, thanks'
          onClick={handleClose}
          sx={{
            mr: 2,
          }}
        />

        <SignInButton sx={{ mr: 2 }} />
      </DialogActions>
    </DialogSx>
  )
}
