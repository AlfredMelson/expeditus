import React from 'react'

import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Link from 'next/link'

import { NavigationPrivateDivider } from '@modules/navbar/components/navigation'
import { ROUTES } from '@modules/navbar/constants'

export default function NavigationMobileAuth() {
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Tabs value={value} onChange={handleChange} aria-label='Navigation Tabs'>
      {ROUTES.NAVIGATION_PRIMARY.map((route, index) => (
        <Tab
          key={index}
          component={Link}
          href={route.url}
          label={route.name}
          sx={{
            px: '6px',
            mx: '6px',
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
            paddingLeft: '6px',
            paddingRight: '6px',
            marginLeft: '6px',
            marginRight: '6px',
          }}
        />
      ))}
    </Tabs>
  )
}
