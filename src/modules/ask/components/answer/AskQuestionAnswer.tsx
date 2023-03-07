import React from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Collapse from '@mui/material/Collapse'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function AskQuestionAnswer() {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card variant='outlined' sx={{ borderStyle: 'none', px: 3, py: 2, mb: 1 }}>
      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
        <Checkbox
          size='small'
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='Answer your own question'
        />
        <Typography variant='body1' sx={{ pt: '3px' }}>
          Answer your own question and share your knowledge, Q&A style
        </Typography>
      </Stack>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
