import React from 'react'

import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil'

import {
  suggestionASelectedAtom,
  suggestionBSelectedAtom,
  suggestionCSelectedAtom,
  suggestionEmojiAtom,
  suggestionSelectedAtom,
  suggestionTextAtom,
  suggestionVisabilityAtom,
  updatedUserEmojiDBAtom,
  updatedUserStatusDBAtom,
  userEmojiDBAtom,
  userIsBusyDBAtom,
  userStatusDBAtom,
} from '@modules/profile/recoil'

export default function StatusSuggestions() {
  const [suggestionVisability, setSuggestionVisability] = useRecoilState(suggestionVisabilityAtom)
  const setSuggestionEmoji = useSetRecoilState(suggestionEmojiAtom)
  const setSuggestionText = useSetRecoilState(suggestionTextAtom)
  const suggestionEmoji = useRecoilValue(suggestionEmojiAtom)
  const suggestionText = useRecoilValue(suggestionTextAtom)
  const [suggestionSelected, setSuggestionSelected] = useRecoilState(suggestionSelectedAtom)
  const [suggestionASelected, setSuggestionASelected] = useRecoilState(suggestionASelectedAtom)
  const [suggestionBSelected, setSuggestionBSelected] = useRecoilState(suggestionBSelectedAtom)
  const [suggestionCSelected, setSuggestionCSelected] = useRecoilState(suggestionCSelectedAtom)
  const setUpdatedUserStatusDB = useSetRecoilState(updatedUserStatusDBAtom)
  const setUpdatedUserEmojiDB = useSetRecoilState(updatedUserEmojiDBAtom)
  const userStatusDB = useRecoilValue(userStatusDBAtom)
  const userEmojiDB = useRecoilValue(userEmojiDBAtom)

  const userIsBusyDB = useRecoilValue(userIsBusyDBAtom)
  if (userIsBusyDB) {
    setSuggestionVisability(!userIsBusyDB)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOptionA = (event: any) => {
    event.preventDefault()
    setSuggestionASelected(!suggestionASelected)
    setSuggestionBSelected(false)
    setSuggestionCSelected(false)
    setSuggestionEmoji('🌴')
    setSuggestionText('On vacation')
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOptionB = (event: any) => {
    event.preventDefault()
    setSuggestionASelected(false)
    setSuggestionBSelected(!suggestionBSelected)
    setSuggestionCSelected(false)
    setSuggestionEmoji('🎯')
    setSuggestionText('Focusing')
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleOptionC = (event: any) => {
  //   event.preventDefault()
  //   setSuggestionASelected(false)
  //   setSuggestionBSelected(false)
  //   setSuggestionCSelected(!suggestionCSelected)
  //   setSuggestionEmoji('🏠')
  //   setSuggestionText('Working from home')
  // }

  React.useEffect(() => {
    setSuggestionSelected(
      suggestionASelected || suggestionBSelected || suggestionCSelected ? true : false,
    )
    suggestionSelected == true
      ? (setUpdatedUserStatusDB(suggestionText as string),
        setUpdatedUserEmojiDB(suggestionEmoji as string))
      : (setUpdatedUserStatusDB(userStatusDB as string),
        setUpdatedUserEmojiDB(userEmojiDB as string))
  }, [
    setSuggestionSelected,
    setUpdatedUserEmojiDB,
    setUpdatedUserStatusDB,
    suggestionASelected,
    suggestionBSelected,
    suggestionCSelected,
    suggestionEmoji,
    suggestionSelected,
    suggestionText,
    userEmojiDB,
    userStatusDB,
  ])

  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={3}
      sx={{
        m: suggestionVisability ? '10px 0 20px 20px' : 0,
        height: suggestionVisability ? '60px' : '0px',
        visibility: suggestionVisability ? 'visible' : 'hidden',
      }}>
      <Typography variant='body1'>Suggestions:</Typography>
      <Button variant='outlined' onClick={handleOptionA} startIcon={<>🌴</>}>
        On vacation
      </Button>
      <Button variant='outlined' onClick={handleOptionB} startIcon={<>🎯</>}>
        Focusing
      </Button>
    </Stack>
  )
}

{
  /* <Button variant='outlined' onClick={handleOptionC} startIcon={<>🏠</>}>
  Working from home
</Button> */
}
