import React from 'react'

import Stack from '@mui/material/Stack'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import { AnimatePresence, motion } from 'framer-motion'

import MAnswerCard from './MAnswerCard'

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
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
      <AnimatePresence>
        {value === index && (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            transition={{ duration: 0.5 }}>
            <Typography>{children}</Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function a11yProps(index: number) {
  return {
    index: index,
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const getItems = () =>
  Array(3)
    .fill(0)
    .map((_, ind) => ({ index: ind, id: a11yProps(ind) }))

export default function MAnswerTabsContainer() {
  const [items] = React.useState(getItems)

  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        sx={theme => ({ bgcolor: theme.palette.background.paper })}>
        <Typography variant='h6' sx={theme => ({ px: 1, color: theme.palette.text.primary })}>
          Answers:
        </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='auto'
            textColor='inherit'
            aria-label='full width tabs example'>
            <Tab label='Item One' {...a11yProps(0)} />
            <Tab label='Item Two' {...a11yProps(1)} />
            <Tab label='Item Three' {...a11yProps(2)} />
          </Tabs>
      </Stack>

      {items.map(({ id }) => (
        <TabPanel key={id.index} value={value} index={id.index}>
          <MAnswerCard />
        </TabPanel>
      ))}
    </>
  )
}
