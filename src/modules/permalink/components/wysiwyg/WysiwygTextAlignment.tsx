import React from 'react'

import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Tooltip from '@mui/material/Tooltip'

export default function WysiwygTextAlignment() {
  const [alignment, setAlignment] = React.useState<string>('left')

  const handleAlignment = (_event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment)
  }

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label='text alignment'
    >
      <ToggleButton value='left' aria-label='left aligned'>
        <Tooltip title='Text align left'>
          <FormatAlignLeftIcon />
        </Tooltip>
      </ToggleButton>
      <ToggleButton value='center' aria-label='centered'>
        <Tooltip title='Text align center'>
          <FormatAlignCenterIcon />
        </Tooltip>
      </ToggleButton>
      <ToggleButton value='right' aria-label='right aligned'>
        <Tooltip title='Text align right'>
          <FormatAlignRightIcon />
        </Tooltip>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
