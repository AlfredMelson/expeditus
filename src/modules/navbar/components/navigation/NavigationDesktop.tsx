import React from 'react'

import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NavigationPrivateDivider } from '@modules/navbar/components/navigation'
import { ROUTES } from '@modules/navbar/constants'

export default function NavigationDesktop() {
  const router = useRouter()

  const [tabValue, setTabValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  React.useEffect(() => {
    const query = router.pathname.split('/')[1]

    switch (query) {
      case '':
        setTabValue(0)
        break
      case 'taxonomy':
        setTabValue(1)
        break
      case 'foryou':
        setTabValue(3)
        break
      case 'following':
        setTabValue(4)
        break
      default:
        setTabValue(2)
        break
    }
  }, [router])

  return (
    <Tabs
      value={tabValue}
      onChange={handleChange}
      aria-label='Navigation Tabs'
      sx={theme => ({
        '& .MuiTabs-indicator': {
          backgroundColor:
            tabValue === 2 ? 'transparent' : theme.palette.mode === 'dark' ? '#2196F4' : '#1a73e8',
          height: '2px',
        },
      })}
    >
      {ROUTES.NAVIGATION_PRIMARY.map((route, index) => (
        <Tab
          key={index}
          component={Link}
          href={route.url}
          label={route.name}
          sx={{
            px: '8px',
            mx: '8px',
          }}
        />
      ))}
      <NavigationPrivateDivider />
      {ROUTES.NAVIGATION_SECONDARY.map((route, index) => (
        <Tab
          key={index}
          component={Link}
          href={route.url}
          label={route.name}
          sx={{
            paddingLeft: '8px',
            paddingRight: '8px',
            marginLeft: '8px',
            marginRight: '8px',
          }}
        />
      ))}
    </Tabs>
  )
}
