import React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Stack } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'

export default function QuestionInfoAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Fade in timeout={1000}>
      <Card
        sx={{
          minWidth: 280,
          maxWidth: 360,
          minHeight: 240,
          display: 'flex',
          flexDirection: 'column',
          p: 2.5,
          color: '#fff',
          boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
        }}>
        <Typography variant='h6' component='div' sx={{ my: '10px' }}>
          Information about your question
        </Typography>
        <Typography variant='body1' component='div' sx={{ mb: '20px', lineHeight: 1.2 }}>
          The community is here to help you with specific plant species questions or gardening
          problems.
        </Typography>
        <Box>
          <div>
            <Accordion
              elevation={2}
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'>
                <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
                  <Typography variant='body1'>1.</Typography>
                  <Typography variant='body1'>Summarize the problem</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <li>Include details about your goal</li>
                  <li>Describe expected and actual results</li>
                  <li>Include any error messages</li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={2}
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'>
                <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
                  <Typography variant='body1'>2.</Typography>
                  <Typography variant='body1'>Describe what you've tried</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Show what you’ve tried and tell us what you found (on this site or elsewhere) and
                  why it didn’t meet your needs. You can get better answers when you provide
                  research.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={2}
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel3a-content'
                id='panel3a-header'>
                <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
                  <Typography variant='body1'>3.</Typography>
                  <Typography variant='body1'>Show some code</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  When appropriate, share the minimum amount of code others need to reproduce your
                  problem (also called a minimum, reproducible example)
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Box>
      </Card>
    </Fade>
  )
}
