import React from 'react'

import TextField from '@mui/material/TextField'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { suggestionVisabilityAtom, updatedUserStatusDBAtom } from '@modules/profile/recoil'

export function StatusInputForm() {
  const setSuggestionVisability = useSetRecoilState(suggestionVisabilityAtom)

  const updatedUserStatusDB = useRecoilValue(updatedUserStatusDBAtom)

  const inputField = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    setTimeout(() => {
      inputField.current?.focus()
    }, 1250)
  }, [])

  const handleMouseDown = () => {
    setSuggestionVisability(true)
  }

  return (
    <TextField
      onMouseDown={handleMouseDown}
      ref={inputField}
      autoComplete='off'
      value={updatedUserStatusDB}
      type='input'
      variant='outlined'
      size='small'
      fullWidth
      sx={{ ml: '10px' }}
    />
  )
}
