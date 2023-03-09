import React from 'react'

import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { useSetRecoilState, useRecoilState } from 'recoil'

import {
  updatedUserEmojiDBAtom,
  updatedUserStatusDBAtom,
  userIsBusyDBAtom,
} from '@modules/profile/recoil'

export default function StatusIsBusy() {
  const [userIsBusyDB, setUserIsBusyDB] = useRecoilState(userIsBusyDBAtom)
  const setUpdatedUserStatusDB = useSetRecoilState(updatedUserStatusDBAtom)
  const setUpdatedUserEmoji = useSetRecoilState(updatedUserEmojiDBAtom)

  if (userIsBusyDB) {
    setUpdatedUserStatusDB('I may be slow to respond.')
    setUpdatedUserEmoji('🧠')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setUserIsBusyDB(!userIsBusyDB)
    setUserIsBusyDB(event.target.checked)
  }

  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{ m: '10px 0 20px 20px' }}>
      <FormControlLabel
        control={<Checkbox checked={userIsBusyDB} onChange={handleChange} />}
        label='Busy'
      />
      <Box sx={{ mx: '20px', maxWidth: '320px' }}>
        <Typography variant='body1'>
          When others mention you, assign you, or request your review, Expeditus will let them know
          that you have limited availability.
        </Typography>
      </Box>
    </Stack>
  )
}
