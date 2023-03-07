import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'

import {
  TagCardHeader,
  TagCardActions,
  TagCardAnalytics,
  TagCardDescription,
} from '@modules/common/components/tagCard'

interface ITagCard {
  tagName: string
  handleClose?: () => void
}

export default function TagCard({ tagName, handleClose }: ITagCard) {
  return (
    <>
      <Card sx={{ minWidth: '320px' }}>
        <TagCardHeader tagName={tagName} handleClose={handleClose} />
        <TagCardDescription />
        <TagCardAnalytics />
        <Divider variant='fullWidth' sx={{ mt: 2 }} />
        <TagCardActions tagName={tagName} />
      </Card>
    </>
  )
}
