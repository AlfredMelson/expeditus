import Stack from '@mui/material/Stack'

// import React from 'react'
// import Backdrop from '@mui/material/Backdrop'
// import ButtonBase from '@mui/material/ButtonBase'
// import Chip from '@mui/material/Chip'
// import Popover from '@mui/material/Popover'
// import { TagCard } from '@modules/common/components/tagCard'
// import { QuestionTagsSkeleton } from '@modules/permalink/components/tags'
// import { trpc } from '@src/utils/trpc'

export default function QuestionTags() {
  // const query = trpc.tag.findByQuestionId.useQuery({ questionIDs: question.id })
  // const [tagAnchorEl, setTagAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setTagAnchorEl(event.currentTarget)
  // }

  // const handleClose = () => {
  //   setTagAnchorEl(null)
  // }

  // const open = Boolean(tagAnchorEl)

  return (
    <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={1}>
      {/* <Chip key={tag.id} label={tag.name} component={ButtonBase} onClick={handleClick} />
      <Backdrop sx={{ zIndex: theme => theme.zIndex.drawer + 1 }} open={open}>
        <Popover
          open={open}
          anchorEl={tagAnchorEl}
          onClose={handleClose}
          sx={{ marginTop: 1 }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}>
          <TagCard tagName={tag.name} handleClose={handleClose} />
        </Popover>
      </Backdrop> */}
    </Stack>
  )
}
