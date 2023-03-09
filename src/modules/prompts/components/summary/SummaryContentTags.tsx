import React from 'react'

import Backdrop from '@mui/material/Backdrop'
import ButtonBase from '@mui/material/ButtonBase'
import Chip from '@mui/material/Chip'
import Popover from '@mui/material/Popover'
import Stack from '@mui/material/Stack'

import { TagCard } from '@modules/common/components/tagCard'

import { SummaryContentTagsSkeleton } from '@modules/prompts/components/summary'
import { trpc } from '@src/utils/trpc'

interface ISummaryContentTags {
  questionId: string
}

export default function SummaryContentTags({ questionId }: ISummaryContentTags) {
  const query = trpc.tag.findByQuestionId.useQuery({ questionID: questionId })
  const [tagAnchorEl, setTagAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTagAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setTagAnchorEl(null)
  }

  const open = Boolean(tagAnchorEl)

  return (
    <>
      {query.isLoading && <SummaryContentTagsSkeleton />}
      {query.isError && <>Error</>}
      {query.isSuccess &&
        query.data.map(tag => (
          <Stack
            key={tag.id}
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={1}>
            <Chip
              label={tag.name}
              clickable
              component={ButtonBase}
              onClick={handleClick}
              onMouseEnter={() => handleClick}
              onFocus={() => handleClick}
              onMouseLeave={() => handleClose}
              onBlur={() => handleClose}
            />
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
            </Backdrop>
          </Stack>
        ))}
    </>
  )
}
