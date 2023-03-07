import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const MenuItemButton = () => {
  const [clearStatus, setClearStatus] = React.useState('never')

  const lengths = [
    { id: 0, length: 'never' },
    { id: 1, length: 'in 30 mins' },
    { id: 2, length: 'in 4 hours' },
    { id: 3, length: 'today' },
    { id: 4, length: 'thie week' },
  ]

  const handleChange = (event: {
    preventDefault: () => void
    target: { value: React.SetStateAction<string> }
  }) => {
    event.preventDefault()
    setClearStatus(event.target.value)
  }

  // const handleOpen  = (event: { preventDefault: () => void }) => {
  // event.preventDefault()
  //   setClearStatus(!clearStatus)
  // }

  return (
    <>
      <Typography
        variant='body1'
        sx={{
          gridColumn: '1 / 3',
          gridRow: 1,
          paddingLeft: '1.5em',
          color: 'var(--text-color-primary)',
        }}
      >
        Clear status:
      </Typography>

      <Box sx={{ gridColumn: '3 / 6', gridRow: 1 }}>
        <Box
          sx={{
            '& .MuiSelect-icon': { color: '#ffffff' },
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
          }}
        >
          <TextField fullWidth select value={clearStatus} onChange={handleChange}>
            {lengths.map(option => (
              <MenuItem
                key={option.id}
                title={option.length}
                value={option.length}
                sx={{
                  height: 40,
                  background: 'var(--component-selector-bg)',
                  color: 'var(--component-selector-text)',
                  transition: 'var(--transition-speed-fastest)',
                  transitionProperty: 'background borderColor boxShadow color',
                  '&:hover': {
                    background: 'var(--btn-secondary-bg-hover)',
                    boxShadow: 'var(--btn-secondary-shadow-hover)',
                    color: 'var(--btn-secondary-text-hover)',
                  },
                }}
              >
                <Button
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  sx={{ color: 'var(--component-selector-text)', background: 'none' }}
                >
                  <Typography variant='body1'>{option.length}</Typography>
                </Button>
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
    </>
  )
}

export default function StatusDuration() {
  return (
    <Box
      sx={{
        gridColumn: '1 / -1',
        gridRow: 5,
        borderTop: '1px solid var(--modal-border-color)',
        background: 'var(--modal-bg-color-primary)',
        boxShadow: 'var(--shadow-inset-medium)',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 1fr)',
          gridTemplateRows: '50px',
          alignItems: 'center',
          margin: '10px 0',
        }}
      >
        <MenuItemButton />
      </Box>
    </Box>
  )
}
