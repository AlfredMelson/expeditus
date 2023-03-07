import React from 'react'

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import BookmarkBorderTwoToneIcon from '@mui/icons-material/BookmarkBorderTwoTone'

import OutboundIcon from '@mui/icons-material/Outbound'
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import { useSession } from 'next-auth/react'

import { trpc } from '@src/utils/trpc'

import type { RouterOutputs } from '@src/utils/trpc'

// import { MToolTip } from '@modules/common/components/tooltip'

type QuestionQueryOutput = RouterOutputs['question']['findByPermalink']

interface IMAnswerCardMorePrimary {
  question: QuestionQueryOutput
}

export default function MAnswerCardMorePrimary({ question }: IMAnswerCardMorePrimary) {
  const { data: session } = useSession()

  const addIsQnUseful = trpc.usefulQn.addIsQnUseful.useMutation()

  const [userApproved, setUserApproved] = React.useState<boolean>(false)

  const [userDownVoted, setUserDownVoted] = React.useState<boolean>(false)

  const removeIsQnUseful = trpc.usefulQn.removeIsQnUseful.useMutation()

  // validate if user has approved the question
  // React.useEffect(() => {
  //   if (question && session?.user !== null && session?.user !== undefined) {
  //     const userApproved = question.usefulQn.some(usefulQn => usefulQn.userId === session?.user?.id)
  //     setUserApproved(userApproved)
  //   }
  // }, [question, session])

  //   if (profile.isSuccess && profile.data) {
  //     const isUserApproved = profile.data.usefulQn.some(
  //       usefulQn => usefulQn.questionID === question?.id,
  //     )
  //     setUserApproved(isUserApproved)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const handleAddIsQnUseful = async () => {
    if (question && session?.user !== null && session?.user !== undefined) {
      const result = await addIsQnUseful.mutateAsync({
        questionID: question.id,
        userId: session.user.id,
      })
      setUserApproved(true)
      setUserDownVoted(false)
      if (result) return
    }
  }
  const handleRemoveIsQnUseful = async () => {
    if (question && session?.user !== null && session?.user !== undefined) {
      const result = await removeIsQnUseful.mutateAsync({
        questionID: question.id,
        userId: session.user.id,
      })
      setUserApproved(false)
      setUserDownVoted(false)
      if (result) return
    }
  }

  return (
    <>
      <Stack direction='row' spacing={1}>
        {/* <MToolTip title='This question shows research effort; it is useful and clear'> */}

        {userApproved ? (
          <IconButton
            onClick={handleRemoveIsQnUseful}
            sx={theme => ({ color: theme.palette.text.primary })}>
            <OutboundIcon fontSize='medium' sx={theme => ({ color: theme.palette.text.primary })} />
          </IconButton>
        ) : (
          <IconButton
            onClick={handleAddIsQnUseful}
            sx={theme => ({ color: theme.palette.text.primary })}>
            <OutboundOutlinedIcon
              fontSize='medium'
              sx={theme => ({ color: theme.palette.text.primary })}
            />
          </IconButton>
        )}

        {/* </MToolTip> */}
        <Tooltip title='This question does not show any research effort; it is unclear or not useful'>
          <IconButton>
            {userDownVoted ? (
              <OutboundIcon
                fontSize='medium'
                sx={theme => ({ color: theme.palette.text.primary, transform: 'rotate(90deg)' })}
              />
            ) : (
              <OutboundOutlinedIcon fontSize='medium' sx={{ transform: 'rotate(90deg)' }} />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title='Activate notifications for this quesiton'>
          <IconButton>
            {userDownVoted ? (
              <BookmarkBorderTwoToneIcon
                fontSize='medium'
                sx={theme => ({ color: theme.palette.text.primary })}
              />
            ) : (
              <BookmarkBorderOutlinedIcon fontSize='medium' />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title='Share'>
          <IconButton>
            <ShareOutlinedIcon fontSize='medium' />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  )
}
