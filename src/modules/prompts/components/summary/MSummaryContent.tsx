import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { truncateText } from '@modules/prompts/func'
import { trpc } from '@src/utils/trpc'

type MSummaryContent = {
  id: string
  title: string
  body: string
  permalink: string
}

export default function MSummaryContent({ id, title, body, permalink }: MSummaryContent) {
  const { data: session } = useSession()

  const addView = trpc.view.addQuestionView.useMutation()

  const handleQuestionViewed = async () => {
    if (session?.user !== null && session?.user !== undefined) {
      const result = await addView.mutateAsync({
        questionID: id,
        userId: session.user.id,
      })
      if (result) return
    }
  }

  return (
    <Stack
      component={Link}
      href={`/qn/${permalink}`}
      onClick={handleQuestionViewed}
      direction='column'
      justifyContent='flex-start'
      alignItems='flex-start'
      sx={{ mt: 0.5, mb: 1.5, textDecoration: 'none' }}>
      <Typography
        variant='h5'
        sx={theme => ({
          maxHeight: '130px',
          fontSize: '22px',
          fontWeight: 400,
          lineHeight: '1.4',
          color: theme.palette.text.primary,
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        })}>
        {truncateText(title, 150)}
      </Typography>
      <Typography
        sx={{
          my: 1,
          pr: '4px',
          fontSize: '17px',
          fontWeight: 300,
          lineHeight: '1.3',
          color: '#f0f6fc',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
        {truncateText(body, 200)}
      </Typography>
    </Stack>
  )
}
