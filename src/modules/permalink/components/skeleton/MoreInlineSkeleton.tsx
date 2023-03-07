import IconButton from '@mui/material/IconButton'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

import { ROUTES } from '@modules/permalink/constants'

export default function MoreInlineSkeleton() {
  const inlineObjectsCount = Object.keys(ROUTES.MORE_INLINE).length

  return (
    <Stack direction='row' spacing={1}>
      {Array.from({ length: inlineObjectsCount }, (_, index) => (
        <IconButton key={index}>
          <Skeleton variant='rounded' width={20} height={20} />
        </IconButton>
      ))}
    </Stack>
  )
}
