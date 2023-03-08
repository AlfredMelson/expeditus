import CampaignIcon from '@mui/icons-material/Campaign'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { useSetRecoilState } from 'recoil'

import { ROUTES } from '@modules/navbar/constants'

import { signupBenefitsDialogAtom } from './recoil'

export default function BottomNavigationMobile() {
  const { status } = useSession()
  const { push, pathname } = useRouter()

  const setSignupBenefitsDialog = useSetRecoilState(signupBenefitsDialogAtom)

  // determine if the pathname is a question permalink
  const isPermalink = pathname.includes('/qn/')

  // bottom navigation icon switch
  const getNavIcon = (value: string) => {
    switch (value) {
      case 'questions':
        return <QuestionAnswerOutlinedIcon fontSize='medium' />
      case 'search':
        return <SearchOutlinedIcon fontSize='medium' />
      case 'ask':
        return <CampaignIcon fontSize='medium' />
      case 'taxonomy':
        return <HubOutlinedIcon fontSize='medium' />
      case 'notifications':
        return <NotificationsOutlinedIcon fontSize='medium' />
    }
  }

  const handleSignupBenefitsOpen = () => {
    if (status === 'authenticated') {
      push('/')
    }
    if (status === 'loading' || status === 'unauthenticated') {
      setSignupBenefitsDialog(true)
    }
  }

  return (
    <>
      {!isPermalink && (
        <>
          <BottomNavigation
            showLabels
            component={motion.div}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.4 }}>
            {ROUTES.BOTTOM_NAVIGATION_MOBILE.map((route, index) => (
              <>
                {status === 'authenticated' ? (
                  <BottomNavigationAction
                    key={index}
                    label={route.name}
                    onClick={() => push(route.url)}
                    value={route.value}
                    icon={getNavIcon(route.value)}
                    sx={{
                      background: 'rgba(0,0,0,0.72)',
                    }}
                  />
                ) : (
                  <BottomNavigationAction
                    label={route.name}
                    onClick={
                      route.value === 'notifications' || route.value === 'ask'
                        ? handleSignupBenefitsOpen
                        : () => push(route.url)
                    }
                    key={index}
                    value={route.value}
                    icon={getNavIcon(route.value)}
                    sx={{
                      background: 'rgba(0,0,0,0.72)',
                    }}
                  />
                )}
              </>
            ))}
          </BottomNavigation>
        </>
      )}
    </>
  )
}
