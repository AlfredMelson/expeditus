import React from 'react'

import Box from '@mui/material/Box'
import { alpha } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Link from 'next/link'

import { SortInteresting } from '@modules/prompts/components/tabbed-sort'
import { ROUTES } from '@modules/prompts/constants'

// import dynamic from 'next/dynamic'
// const DynamicSortInteresting = dynamic(
//   import('@modules/prompts/components/tabbed-sort/SortInteresting'),
//   { suspense: true },
// )
// const DynamicSortMostRecent = dynamic(
//   import('@modules/prompts/components/tabbed-sort/SortMostRecent'),
//   { suspense: true },
// )
// const DynamicSortTrending = dynamic(
//   import('@modules/prompts/components/tabbed-sort/SortTrending'),
//   { suspense: true },
// )
// const DynamicSortMostViews = dynamic(
//   import('@modules/prompts/components/tabbed-sort/SortMostViews'),
//   { suspense: true },
// )

function a11yProps(index: number) {
  return {
    id: `tabbed-sort-${index}`,
    'aria-controls': `tabbed-sort-panel-${index}`,
  }
}

export default function PromptSort() {
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Box
        sx={{
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: theme => alpha(theme.palette.primary.main, 0.1),
          mt: 1,
        }}>
        <Tabs value={value} onChange={handleChange} aria-label='Question sort'>
          {ROUTES.QUESTIONS.map((route, index) => (
            <Tab
              key={index}
              component={Link}
              href={route.url}
              label={route.name}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      <SortInteresting value={value} index={0} />
      <SortInteresting value={value} index={0} />
    </>
  )
}
