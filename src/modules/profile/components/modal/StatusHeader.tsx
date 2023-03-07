import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { useSetRecoilState } from 'recoil'

import {
  emojiVisabilityAtom,
  suggestionVisabilityAtom,
  userStatusModalOpenAtom,
} from '@modules/profile/recoil'

interface IUserAvatarCard {
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>
}

export default function StatusHeader({ setAnchorEl }: IUserAvatarCard) {
  const setUserStatusOpenModal = useSetRecoilState(userStatusModalOpenAtom)
  const setSuggestionVisability = useSetRecoilState(suggestionVisabilityAtom)
  const setEmojiVisability = useSetRecoilState(emojiVisabilityAtom)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = () => {
    setAnchorEl(null)
    setUserStatusOpenModal(false)
    setSuggestionVisability(false)
    setEmojiVisability(false)
  }

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mt: '10px', mx: '10px' }}>
      <Typography variant='body1'>Update your status</Typography>
      <IconButton size='small' onClick={handleChange}>
        <CloseIcon fontSize='inherit' />
      </IconButton>
    </Stack>
  )
}
