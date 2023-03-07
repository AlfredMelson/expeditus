import React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'

import { MuiButton } from '@modules/common/components/button'

export default function MoreLinksButton() {
  const [expanded, setExpanded] = React.useState<boolean>(false)

  const handleChange = () => {
    setExpanded(!expanded)
  }

  return (
    <Fade in timeout={1500}>
      <Card
        sx={{
          minWidth: 280,
          maxWidth: 360,
          display: 'flex',
          flexDirection: 'column',
          p: 2.5,
          pt: 0,
          color: '#fff',
          boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
        }}>
        <MuiButton
          buttonVariant='text'
          onClick={handleChange}
          buttonText='More helpful links'
          sx={{ color: '#2196F3', alignSelf: 'flex-start' }}
        />
        <Box sx={{ display: 'flex', px: 1.5 }}>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography variant='body1' sx={{ mt: 1 }}>
                <li>Find more information about how to ask a good question here</li>
                <li>Visit the help center</li>
              </Typography>
            </CardContent>
          </Collapse>
        </Box>
      </Card>
    </Fade>
  )
}
