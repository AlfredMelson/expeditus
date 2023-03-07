import React from 'react'

import RedoIcon from '@mui/icons-material/Redo'
import UndoIcon from '@mui/icons-material/Undo'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Tooltip from '@mui/material/Tooltip'

export default function WysiwygHistory() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic'])

  const handleFormat = (_event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats)
  }

  return (
    <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label='text formatting'>
      <ToggleButton value='undo' aria-label='undo'>
        <Tooltip title='Undo'>
          <UndoIcon />
        </Tooltip>{' '}
      </ToggleButton>
      <ToggleButton value='redo' aria-label='redo'>
        <Tooltip title='Redo'>
          <RedoIcon />
        </Tooltip>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
