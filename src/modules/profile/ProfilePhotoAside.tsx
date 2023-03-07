import React from 'react'

import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover'
import Stack from '@mui/material/Stack'

import { useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil'

import { userImageTypeConversion, userNameTypeConversion } from '@modules/navbar/utils'
import { userEmojiDBAtom } from '@modules/profile/recoil'

import EditUserStatus from './components/modal/EditUserStatus'

export default function ProfilePhotoAside() {
  const { data } = useSession()

  // const setUserStatusDB = useSetRecoilState(userStatusDBAtom)
  const [userEmojiDB, setUserEmojiDB] = useRecoilState(userEmojiDBAtom)

  // const setUserIsBusyDB = useSetRecoilState(userIsBusyDBAtom)
  // const setExpiresAtDB = useSetRecoilState(expiresAtDBAtom)

  React.useEffect(() => {
    setUserEmojiDB('🌴')

    // async function getAPIData() {
    //   const results: any = await getCognitoUser()
    //   setCognitoUsername(results.username)
    // }
    // getAPIData()
  })

  // React.useEffect(() => {
  //   async function getAPIData() {
  //     const results: any = await getUserStatus()
  //     setUserStatusDB(results.status)
  //     setUserEmojiDB(results.emoji)
  //     setUserIsBusyDB(results.isBusy)
  //     setExpiresAtDB(results.expiresAt)
  //   }
  //   getAPIData()
  // }, [setExpiresAtDB, setUserEmojiDB, setUserIsBusyDB, setUserStatusDB])

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <form>
      <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
        <Avatar
          aria-label={userNameTypeConversion({ data })}
          variant='rounded'
          sx={{ width: 200, height: 200 }}
          src={userImageTypeConversion({ data })}
        />
        <IconButton
          disableRipple
          size='small'
          onClick={handleClick}
          sx={{
            width: '40px',
            height: '40px',
            placeSelf: 'center',
            color: 'var(--btn-icon-color)',
            background: 'var(--btn-icon-bg)',
            transition: 'var(--transition-speed-fastest)',
            transitionProperty: 'background',
            '&:hover': {
              background: 'var(--btn-icon-bg-hover)',
            },
          }}>
          {userEmojiDB}
        </IconButton>
      </Stack>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{ marginTop: 1 }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}>
        <EditUserStatus setAnchorEl={setAnchorEl} />
      </Popover>
    </form>
  )
}
