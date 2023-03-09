import React from 'react'

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { MCommunityDrawer, MProfileDrawer } from '@modules/navbar/components/drawer'
import { ElevationScroll, ScrollTop } from '@modules/navbar/func'
import { sortQuestionTabIdAtom } from '@modules/prompts/recoil'

import { signupBenefitsDialogAtom } from './recoil'

export default function AppNavBarMobile() {
  const { status } = useSession()
  const { pathname } = useRouter()

  const setSignupBenefitsDialog = useSetRecoilState(signupBenefitsDialogAtom)

  // determine if the pathname is a question permalink
  const isPermalink = pathname.includes('/qn/')

  const sortQuestionTabId = useRecoilValue(sortQuestionTabIdAtom)

  const [navBarTitle, setNavBarTitle] = React.useState<string>('')

  React.useEffect(() => {
    switch (sortQuestionTabId) {
      case 0:
        setNavBarTitle('Popular questions')
        break
      case 1:
        setNavBarTitle('Recent questions')
        break
      case 2:
        setNavBarTitle('Questions from Followed')
        break
      case 3:
        setNavBarTitle('Saved questions')
        break
      case 4:
        setNavBarTitle('User defined questions')
        break
    }
  }, [sortQuestionTabId])

  return (
    <>
      {!isPermalink && (
        <ElevationScroll>
          <AppBar elevation={0} position='fixed' sx={{ backgroundColor: 'transparent' }}>
            <Toolbar disableGutters>
              {status === 'authenticated' ? (
                <MCommunityDrawer />
              ) : (
                <IconButton onClick={() => setSignupBenefitsDialog(true)} sx={{ ml: 1 }}>
                  <QuestionAnswerOutlinedIcon sx={{ height: '30px', width: '30px' }} />
                </IconButton>
              )}
              <ScrollTop>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: 500,
                    ml: 2,
                    pt: '4px',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.7px',
                  }}>
                  {navBarTitle}
                </Typography>
              </ScrollTop>
              <div style={{ flex: 1 }} />
              {status === 'authenticated' && <MProfileDrawer />}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      )}
      <div id='back-to-top-anchor' />
    </>
  )
}
