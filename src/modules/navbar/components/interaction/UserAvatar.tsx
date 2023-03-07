import Avatar from '@mui/material/Avatar'
import { useSession } from 'next-auth/react'

export default function UserAvatar() {
  const { data } = useSession()
  const imageOfUser = data?.user !== undefined ? data.user.image : ''
  const userImage = imageOfUser !== null ? imageOfUser : undefined

  const nameOfUser = data?.user !== undefined ? data.user.name : ''
  const userName = nameOfUser !== null ? nameOfUser : undefined

  return (
    <Avatar
      aria-label={userName}
      variant='rounded'
      sx={{ width: 28, height: 28, mt: '2px' }}
      src={userImage}
    />
  )
}
