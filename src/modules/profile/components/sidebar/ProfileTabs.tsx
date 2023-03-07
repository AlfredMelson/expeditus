import * as React from 'react'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import {
  AccountPanel,
  NotificationsPanel,
  PublicProfilePanel,
} from '@modules/profile/components/tab-panel'
import { ROUTES } from '@modules/profile/constants'

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', mt: 11, height: '100%' }}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'>
        {ROUTES.SIDEBAR_NAVIGATION.map((route, index) => (
          <Tab
            key={index}
            {...a11yProps(index)}
            label={route.name}
            sx={{
              px: 4,
              mx: '8px',
            }}
          />
        ))}
      </Tabs>
      <PublicProfilePanel value={value} index={0} />
      <AccountPanel value={value} index={1} />
      <NotificationsPanel value={value} index={2} />
    </Box>
  )
}
