import React from 'react'

import Box from '@mui/material/Box'
import { useSetRecoilState } from 'recoil'

import { sortQuestionHoverIdAtom } from '@modules/prompts/recoil'

interface ITabPanelBox {
  children: React.ReactNode
  questionId: string
}

export default function TabPanelBox({ questionId, children }: ITabPanelBox) {
  const setSortQuestionHoverId = useSetRecoilState(sortQuestionHoverIdAtom)

  return (
    <Box
      onMouseEnter={() => setSortQuestionHoverId(questionId)}
      onMouseLeave={() => setSortQuestionHoverId(null)}
      sx={theme => ({
        py: 1.5,
        bgcolor: theme.palette.background.paper,
        borderRadius: '4px',
        mb: '4px',
        '&:first-of-type': {
          mt: '2px',
        },
      })}>
      {children}
    </Box>
  )
}
