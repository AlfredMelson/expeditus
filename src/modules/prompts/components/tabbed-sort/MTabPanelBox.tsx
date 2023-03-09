import React from 'react'

import Box from '@mui/material/Box'

interface IMTabPanelBox {
  children: React.ReactNode
  onClick?: () => void
}

export default function MTabPanelBox({ children, onClick }: IMTabPanelBox) {
  return (
    <Box
      onClick={onClick}
      sx={{
        py: '16px',
        m: '20px',
        maxHeight: '450px',
        backgroundImage: 'linear-gradient(70deg, #182661, #3A5ECF 100%)',
        borderRadius: '14px',
        '&:first-of-type': {
          mt: '10px',
        },
      }}>
      {children}
    </Box>
  )
}
