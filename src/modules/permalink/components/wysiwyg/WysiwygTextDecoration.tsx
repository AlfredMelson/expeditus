import React from 'react'

import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Tooltip from '@mui/material/Tooltip'

export default function WysiwygTextDecoration() {
  const [formats, setFormats] = React.useState<string[]>(() => ['', ''])

  const handleFormat = (_event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats)
  }

  return (
    <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label='text formatting'>
      <ToggleButton value='bold' aria-label='bold'>
        <Tooltip title='Text bold'>
          <FormatBoldIcon />
        </Tooltip>
      </ToggleButton>
      <ToggleButton value='italic' aria-label='italic'>
        <Tooltip title='Text italic'>
          <FormatItalicIcon />
        </Tooltip>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
