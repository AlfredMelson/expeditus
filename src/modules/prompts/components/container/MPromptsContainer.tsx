import React from 'react'

import Tabs from '@mui/material/Tabs'
import Link from 'next/link'
import { useSetRecoilState } from 'recoil'

import { MTabSx } from '@modules/prompts/components/mui'
import { MSortInteresting } from '@modules/prompts/components/tabbed-sort'
import { ROUTES } from '@modules/prompts/constants'
import { sortQuestionTabIdAtom } from '@modules/prompts/recoil'

function a11yProps(index: number) {
  return {
    id: `mobile-tabbed-sort-${index}`,
    'aria-controls': `mobile-tabbed-sort-panel-${index}`,
  }
}

export default function MQuestionsContainer() {
  const setSortQuestionTabId = useSetRecoilState(sortQuestionTabIdAtom)
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    setSortQuestionTabId(newValue)
  }

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='Question sort'
        variant='scrollable'
        sx={{
          mt: '58px',
        }}>
        {ROUTES.QUESTIONS.map((route, index) => (
          <MTabSx
            key={index}
            component={Link}
            href={route.url}
            label={route.name}
            {...a11yProps(index)}
            sx={{
              paddingTop: 0,
              paddingBottom: 0,
              px: 3,
              mx: 0.5,
              mt: '18px',
              mb: '8px',
              ':first-of-type': {
                ml: '20px',
                mr: 0.5,
              },
              ':last-of-type': {
                ml: 0.5,
                mr: 2,
              },
            }}
          />
        ))}
      </Tabs>
      <MSortInteresting value={value} index={0} />
    </>
  )
}
