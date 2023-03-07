import React from 'react'

import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import Checkbox from '@mui/material/Checkbox'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion, AnimatePresence } from 'framer-motion'

import { HardinessMenu } from '@modules/ask/components/location'
import { MuiButton } from '@modules/common/components/button'

export default function HardinessSelector() {
  const [hardinessValue, setHardinessValue] = React.useState('')

  console.log('hardinessValue', hardinessValue)

  const [expanded, setExpanded] = React.useState(false)

  return (
    <>
      <Stack direction='column' justifyContent='flex-start' alignItems='flex-start'>
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          sx={{ height: '38px' }}>
          <IconButton>
            <HelpCenterIcon fontSize='small' />
          </IconButton>
          <AnimatePresence>
            {!expanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}>
                <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                  <Checkbox
                    size='small'
                    onClick={() => setExpanded(true)}
                    aria-label='soil attributes'
                    checked={expanded}
                  />
                  <Typography variant='body1'>
                    Is your question more related to a specific planting zone?
                  </Typography>
                </Stack>
              </motion.div>
            )}
            {expanded && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                  <Typography variant='body1' sx={{ ml: 1.5, mr: 2 }}>
                    Select the Plant Hardiness zone of related to your question
                  </Typography>
                  <MuiButton
                    buttonSize='small'
                    buttonText={'remove zone'}
                    onClick={() => setExpanded(false)}
                  />
                </Stack>
              </motion.div>
            )}
          </AnimatePresence>
        </Stack>
        <Collapse in={expanded === true} timeout='auto' unmountOnExit>
          <HardinessMenu setHardinessValue={setHardinessValue} />
        </Collapse>
      </Stack>
    </>
  )
}
