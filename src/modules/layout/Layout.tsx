import React from 'react'

import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useRecoilState, useRecoilValue } from 'recoil'

import { PageLoadingProgressBar } from '@modules/layout/components'
import { Notifications } from '@modules/layout/context'
import {
  AppNavBarMobile,
  AppNavBarDesktop,
  BottomNavigationMobile,
  AppNavBarTablet,
} from '@modules/navbar'
import { MSignUpBenefitsDialog, SignUpBenefitsDialog } from '@modules/navbar/components/dialog'
import { accountDrawerVisabilityAtom, signupBenefitsDialogAtom } from '@modules/navbar/recoil'

interface ILayout {
  children: React.ReactNode
}

export default function Layout({ children }: ILayout) {
  const theme = useTheme()

  const accountDrawerVisability = useRecoilValue(accountDrawerVisabilityAtom)
  const [signupBenefitsDialog, setSignupBenefitsDialog] = useRecoilState(signupBenefitsDialogAtom)

  const isMobile = useMediaQuery(theme.breakpoints.only('xs'))
  const isTablet = useMediaQuery(theme.breakpoints.only('sm'))

  return (
    <>
      <PageLoadingProgressBar />
      {isTablet && <AppNavBarTablet />}
      {!isMobile && !isTablet && <AppNavBarDesktop />}
      {isMobile && <AppNavBarMobile />}
      <Container disableGutters maxWidth='lg'>
        <Notifications>
          <main>{children}</main>
        </Notifications>
      </Container>
      {isMobile && !accountDrawerVisability && !signupBenefitsDialog && <BottomNavigationMobile />}
      {isMobile ? (
        <MSignUpBenefitsDialog
          open={signupBenefitsDialog}
          handleClose={() => setSignupBenefitsDialog(false)}
        />
      ) : (
        <SignUpBenefitsDialog
          open={signupBenefitsDialog}
          handleClose={() => setSignupBenefitsDialog(false)}
        />
      )}
    </>
  )
}
