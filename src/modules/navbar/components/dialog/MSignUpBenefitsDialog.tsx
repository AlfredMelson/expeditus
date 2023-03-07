import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

import { MuiButton } from '@modules/common/components/button'
import { SignInButton } from '@modules/navbar/components/sign-button'
import { TEXT } from '@modules/navbar/constants'

import signupBenefitsImage from '../../../../../public/assets/signup-benefits.webp'

interface IMSignUpBenefitsDialog {
  open: boolean
  handleClose: () => void
}

export default function MSignUpBenefitsDialog({ open, handleClose }: IMSignUpBenefitsDialog) {
  return (
    <Dialog
      fullScreen
      onClose={handleClose}
      aria-labelledby='customized-dialog-title'
      open={open}
      sx={{
        '& .MuiDialog-paper': {
          backdropFilter: 'saturate(180%) blur(20px)',
          background: 'rgba(0,0,0,0.72)',
        },
      }}>
      <DialogContent>
        <Stack
          direction='column'
          justifyContent='center'
          alignItems='center'
          spacing={2}
          sx={{ height: '100%' }}>
          <Image
            priority
            src={signupBenefitsImage}
            alt='Sign Up Benefits Dialog'
            style={{ maxWidth: '90%' }}
          />
          {TEXT.SIGNUP_BENEFITS_PRIMARY.map((constant, index) => (
            <Typography
              align='center'
              key={index}
              variant={'body1'}
              gutterBottom
              sx={{
                fontWeight: theme => theme.typography.fontWeightRegular,
                fontSize: '18px',
              }}>
              {constant.text}
            </Typography>
          ))}
          <Box>
            {TEXT.SIGNUP_BENEFITS_SECONDARY.map((constant, index) => (
              <Typography
                key={index}
                variant='h5'
                component={'li'}
                gutterBottom
                sx={{
                  fontWeight: theme => theme.typography.fontWeightLight,
                  fontSize: '16px',
                }}>
                {constant.text}
              </Typography>
            ))}
          </Box>
          <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            spacing={4}
            sx={{ pt: 2 }}>
            <MuiButton buttonVariant='text' buttonText='No, thanks' onClick={handleClose} />
            <SignInButton />
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
