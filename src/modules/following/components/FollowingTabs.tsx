import React from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { alpha } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'

import { ROUTES } from '@modules/following/constants'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

export default function FollowingTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <AppBar elevation={0} position='static' sx={{ backgroundColor: 'transparent' }}>
        <Box
          sx={{
            width: '100%',
            mt: 2,
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
            borderBottomColor: theme => alpha(theme.palette.primary.main, 0.1),
          }}>
          <Tabs value={value} onChange={handleChange} aria-label='Navigation Tabs'>
            {ROUTES.FOLLOWING.map((route, index) => (
              <Tab key={index} label={route.name} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
      </AppBar>
      <TabPanel value={value} index={0}>
        Prompt Style
      </TabPanel>
      <TabPanel value={value} index={1}>
        Obsecure Topics
      </TabPanel>
      <TabPanel value={value} index={2}>
        Prompters
      </TabPanel>
    </>
  )
}
