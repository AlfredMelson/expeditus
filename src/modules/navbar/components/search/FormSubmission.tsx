import { useEffect, useRef, useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { SubmitButtonSx, CheckIcon, CircularProgressSx } from '@modules/navbar/components/search'
import { AppSwatch } from '@src/styles'

export default function FormSubmission() {
  // useRef to avoid re-renders during button handler
  const interactionTimer = useRef<number>()

  // handle transitions during sumission
  const [submitting, setSubmitting] = useState(false)

  // handle transitions during sumission
  const [successSubmit, setSuccessfulSubmit] = useState(false)

  // handle submission of user typed url
  const handleDataControls = () => {
    if (!submitting) {
      setSuccessfulSubmit(false)
      setSubmitting(true)

      // set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulSubmit(true)
        setSubmitting(false)
      }, 1250)

      // intialize state
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulSubmit(false)
      }, 3000)

      return
    }
  }

  // handle side effect proceeding button handler
  useEffect(() => {
    return () => {
      // cancel the timeout established by setTimeout()
      clearTimeout(interactionTimer.current)
    }
  }, [])

  return (
    <Box sx={{ position: 'relative' }}>
      <SubmitButtonSx aria-label='fetch api' disabled={submitting} onClick={handleDataControls}>
        {!submitting ? (
          <Typography variant='button'>Search</Typography>
        ) : (
          successSubmit && (
            <CheckIcon
              sx={{
                color: AppSwatch.Dark.Green[500],
              }}
            />
          )
        )}
      </SubmitButtonSx>
      {submitting && <CircularProgressSx />}
    </Box>
  )
}
