import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { styled } from '@mui/material/styles'
import { useRecoilState, useSetRecoilState } from 'recoil'

import {
  emojiVisabilityAtom,
  suggestionVisabilityAtom,
  userStatusModalOpenAtom,
} from '@modules/profile/recoil'

import StatusClear from './StatusDuration'
import StatusFormSection from './StatusFormSection'

// import StatusHeader from './StatusHeader'
import StatusIsBusy from './StatusIsBusy'

import StatusSuggestions from './StatusSuggestions'

export default function UserStatusEditorModal() {
  const [userStatusOpenModal, setUserStatusOpenModal] = useRecoilState(userStatusModalOpenAtom)
  const setSuggestionVisability = useSetRecoilState(suggestionVisabilityAtom)
  const setEmojiVisability = useSetRecoilState(emojiVisabilityAtom)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClose = (event: any) => {
    event.preventDefault()
    setUserStatusOpenModal(false)
    setSuggestionVisability(false)
    setEmojiVisability(false)
  }

  const StyledDialog = styled(Dialog)(() => ({
    '& .MuiDialog-paper': {
      backgroundColor: 'transparent',
    },
  }))

  return (
    <StyledDialog open={userStatusOpenModal} onClose={handleClose} maxWidth='sm'>
      <form
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 1fr)',
          gridTemplateRows: '62px auto auto auto auto auto 62px',
          color: 'var(--text-color-primary)',
          background: 'var(--modal-bg-color-seconday)',
          borderRadius: 'var(--border-radius-md)',
          border: '1px solid var(--modal-border-color)',
        }}>
        {/* <StatusHeader setAnchorEl={} /> */}
        <Box
          sx={{
            gridColumn: '1 / -1',
            gridRow: '2 / 5',
            background: 'var(--modal-bg-color-primary)',
            boxShadow: 'var(--shadow-inset-medium)',
          }}>
          <StatusFormSection />
          <StatusSuggestions />
          <StatusIsBusy />
        </Box>
        <StatusClear />

        <div
          style={{
            gridColumn: '1 / -1',
            gridRow: 6,
            height: '40px',
            background: 'var(--modal-bg-color-warning)',
            justifySelf: 'stretch',
          }}></div>
        {/* <StatusError /> */}
        <div style={{ gridColumn: '2 / 5', gridRow: 7, placeSelf: 'center' }}>
          <Button
            type='submit'
            disableElevation
            variant='contained'
            size='medium'
            sx={{
              minWidth: '150px',
              borderRadius: 'var(--border-radius-sm)',
              background: 'var(--btn-primary-bg)',
              boxShadow: 'var(--btn-primary-shadow)',
              color: 'var(--btn-primary-text)',
              transition: 'var(--transition-speed-fastest)',
              transitionProperty: 'background borderColor boxShadow color',
              '&:hover': {
                background: 'var(--btn-primary-hover-bg)',
                boxShadow: 'var(--btn-primary-hover-shadow)',
                color: 'var(--btn-primary-hover-text)',
              },
            }}>
            Set your status
          </Button>
        </div>
        <div style={{ gridColumn: '6 / 9', gridRow: 7, placeSelf: 'center' }}></div>
      </form>
    </StyledDialog>
  )
}
