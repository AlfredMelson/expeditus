import PersonIcon from '@mui/icons-material/Person'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Skeleton from '@mui/material/Skeleton'

export default function AuthorChipSkeleton() {
  return (
    <Chip
      size='medium'
      avatar={
        <Avatar variant='rounded'>
          <PersonIcon />
        </Avatar>
      }
      label={<Skeleton variant='text' sx={{ fontSize: '20px', width: '100px' }} />}
      variant='outlined'
    />
  )
}
