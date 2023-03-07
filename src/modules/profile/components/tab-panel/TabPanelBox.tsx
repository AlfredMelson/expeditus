import React from 'react'

import Stack from '@mui/material/Stack'

interface ITabPanelBox {
  children: React.ReactNode
}

export default function TabPanelBox({ children }: ITabPanelBox) {
  return (
    <Stack
      direction='column'
      justifyContent='flex-start'
      alignItems='flex-start'
      spacing={1}
      sx={{
        py: 1.5,
        borderRadius: '4px',
        mb: '4px',
        '&:first-of-type': {
          mt: '2px',
        },
      }}>
      {children}
    </Stack>
  )
}
