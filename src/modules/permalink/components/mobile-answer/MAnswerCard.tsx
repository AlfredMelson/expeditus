import React from 'react'

import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

import { useRouter } from 'next/router'

import { useSetRecoilState } from 'recoil'

import {
  MAnswerCardBody,
  MAnswerCardHeader,
  MAnswerCardStats,
  MAnswerCardMorePrimary,
  MAnswerCardMoreSecondary,
} from '@modules/permalink/components/mobile-answer'

import { MPermalinkNotFound } from '@modules/permalink/components/not-found'
import { MPermalinkSkeleton } from '@modules/permalink/components/skeleton'
import { permalinkDataStatusAtom } from '@modules/permalink/recoil'
import { trpc } from '@src/utils/trpc'

export default function MAnswerCard() {
  const router = useRouter()

  const permalink = router.query.permalink as unknown as string

  const query = trpc.question.findByPermalink.useQuery({ permalink })
  console.log('query', query)

  const setPermalinkDataStatus = useSetRecoilState(permalinkDataStatusAtom)

  React.useEffect(() => {
    if (query.isLoading) {
      setPermalinkDataStatus('isLoading')
    }
    if (query.isError) {
      setPermalinkDataStatus('isError')
    }

    setPermalinkDataStatus('isSuccess')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <>
      {query.isLoading && <MPermalinkSkeleton />}
      {query.isError && <MPermalinkNotFound headTitle={permalink} />}
      {query.isSuccess && query.data && (
        <Stack
          direction='column'
          justifyContent='flex-start,'
          sx={{
            mx: '4px',
            ':first-of-type': {
              ml: 0,
            },
            ':last-of-type': {
              mr: 0,
            },
            px: 2,
            py: '16px',
            backgroundImage: 'linear-gradient(60deg, #152153 0%, #4360CA 100%)',
          }}>
          <MAnswerCardHeader
            username={query.data.author.username}
            image={query.data.author.image}
            createdAt={query.data.author.createdAt}
          />
          <Divider variant='fullWidth' sx={{ mt: 1.5 }} />
          <MAnswerCardMorePrimary question={query.data} />
          <MAnswerCardBody body={query.data.body} />
          <MAnswerCardMoreSecondary />
          <MAnswerCardStats />
        </Stack>
      )}
    </>
  )
}
