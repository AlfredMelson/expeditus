import React from 'react'

import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Link from 'next/link'

import { NavigationPrivateDivider } from '@modules/navbar/components/navigation'
import { ROUTES } from '@modules/navbar/constants'

export default function NavigationMobileUnauth() {
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
            px: { sm: '6px', md: '8px' },
            mx: { sm: '6px', md: '8px' },
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
            paddingLeft: { sm: '6px', md: '8px' },
            paddingRight: { sm: '6px', md: '8px' },
            marginLeft: { sm: '6px', md: '8px' },
            marginRight: { sm: '6px', md: '8px' },
          }}
        />
      ))}
    </Tabs>
  )
}
