import React from 'react'

import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import {
  WysiwygTextAlignment,
  WysiwygTextDecoration,
  WysiwygSectionFormat,
  WysiwygHistory,
} from '@modules/ask/components/wysiwyg'
import { MuiButton } from '@modules/common/components/button'

export default function WysiwygContainer() {
  const [expanded, setExpanded] = React.useState(false)
  const [buttonText, setButtonText] = React.useState('Open formating tips')

  const handleExpandClick = () => {
    setExpanded(!expanded)
    setButtonText(expanded ? 'Open formating tips' : 'Close formating tips')
  }

  return (
    <>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing={2}
        sx={{ py: '4px' }}
      >
        <WysiwygTextDecoration />
        <WysiwygTextAlignment />
        <WysiwygSectionFormat />
        <WysiwygHistory />
        <div style={{ flexGrow: 1 }} />
        <MuiButton
          buttonVariant='text'
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label={buttonText}
          buttonText={buttonText}
          sx={{ color: '#2196F3' }}
        />
      </Stack>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
        </CardContent>
      </Collapse>
    </>
  )
}
