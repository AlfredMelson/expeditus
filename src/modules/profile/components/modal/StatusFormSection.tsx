import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import dynamic from 'next/dynamic'
import { useRecoilState, useRecoilValue } from 'recoil'

import {
  emojiVisabilityAtom,
  updatedUserEmojiDBAtom,
  userIsBusyDBAtom,
} from '@modules/profile/recoil'

import { StatusInputForm } from './StatusInputForm'

const DynamicEmojiPicker = dynamic(() => import('./StatusEmojiPicker'), { ssr: true })

export default function StatusFormSection() {
  const [emojiVisability, setEmojiVisability] = useRecoilState(emojiVisabilityAtom)
  const userIsBusyDB = useRecoilValue(userIsBusyDBAtom)
  const updatedUserEmojiDB = useRecoilValue(updatedUserEmojiDBAtom)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEmojiVisable = () => {
    setEmojiVisability(!emojiVisability)
  }

  return (
    <>
      <Stack direction='column' sx={{ m: '10px 20px' }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <IconButton disabled={userIsBusyDB} onClick={handleEmojiVisable}>
            <Box
              style={{
                fontSize: '1.4em',
              }}>
              {updatedUserEmojiDB}
            </Box>
          </IconButton>
          <StatusInputForm />
        </Stack>
        <DynamicEmojiPicker />
      </Stack>
    </>
  )
}
