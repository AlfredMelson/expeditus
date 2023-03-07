import React from 'react'

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import { Typography } from '@mui/material'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Tooltip from '@mui/material/Tooltip'

export default function WysiwygSectionFormat() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic'])

  const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats)
  }

  return (
    <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label='text formatting'>
      <ToggleButton value='formatListNumbered' aria-label='format list numbered'>
        <Tooltip title='Numbered list'>
          <FormatListNumberedIcon />
        </Tooltip>{' '}
      </ToggleButton>
      <ToggleButton value='formatList' aria-label='format list'>
        <Tooltip title='Bulleted list'>
          <FormatListBulletedIcon />
        </Tooltip>
      </ToggleButton>
      <ToggleButton value='headingText' aria-label='heading text'>
        <Tooltip title='Heading text'>
          <Typography variant='h6' sx={{ width: '24px' }}>
            H
          </Typography>
        </Tooltip>
      </ToggleButton>
      <ToggleButton value='horizontalRule' aria-label='horizontal rule'>
        <Tooltip title='Horizontal rule'>
          <HorizontalRuleIcon />
        </Tooltip>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
