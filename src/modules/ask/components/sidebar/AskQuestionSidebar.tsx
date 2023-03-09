import AddIcon from '@mui/icons-material/Add'

import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useSession } from 'next-auth/react'

import { useSetRecoilState } from 'recoil'

import { MuiButton } from '@modules/common/components/button'
import { signupBenefitsDialogAtom } from '@modules/navbar/recoil'

export default function AskQuestionSidebar() {
  const { status } = useSession()

  const setSignupBenefitsDialog = useSetRecoilState(signupBenefitsDialogAtom)

  return (
    <Fade in timeout={750}>
      <Box
        sx={{
          minWidth: 280,
          maxWidth: 360,
          minHeight: 92,
          display: 'flex',
          flexDirection: 'column',
          px: 2.5,
        }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' component='div' sx={{ my: '10px' }}>
            Can't find an prompt?
          </Typography>
          {status === 'authenticated' ? (
            <MuiButton
              buttonVariant='outlined'
              buttonText='Prompt AI'
              buttonLink='/ask'
              startIcon={<AddIcon />}
            />
          ) : (
            <MuiButton
              buttonVariant='outlined'
              buttonText='Prompt AI'
              onClick={() => setSignupBenefitsDialog(true)}
            />
          )}
        </Stack>
      </Box>
    </Fade>
  )
}
