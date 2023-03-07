import React from 'react'

import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

import { useRouter } from 'next/router'

import { useSetRecoilState } from 'recoil'

import {
  MPermalinkQnCardBody,
  MPermalinkQnCardHeader,
  MPermalinkQnCardTags,
  MPermalinkQnCardTitle,
  MPermalinkQnCardStats,
  MPermalinkQnCardMorePrimary,
  MPermalinkQnCardAuthorLocation,
  MPermalinkQnCardMoreSecondary,
} from '@modules/permalink/components/mobile'

import { MPermalinkNotFound } from '@modules/permalink/components/not-found'
import { MPermalinkSkeleton } from '@modules/permalink/components/skeleton'
import { permalinkDataStatusAtom } from '@modules/permalink/recoil'
import { trpc } from '@src/utils/trpc'

export default function MPermalinkQnCard() {
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
            height: '100%',
            px: 2,
            py: '16px',
            backgroundImage: 'linear-gradient(60deg, #152153 0%, #4360CA 100%)',
          }}>
          <MPermalinkQnCardHeader
            username={query.data.author.username}
            image={query.data.author.image}
            createdAt={query.data.author.createdAt}
          />
          <Divider variant='fullWidth' sx={{ mt: 1.5 }} />
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={1}
            sx={{ mt: 2, pr: 1 }}>
            <MPermalinkQnCardAuthorLocation location={query.data.author.location} />
            <MPermalinkQnCardMorePrimary question={query.data} />
          </Stack>
          <MPermalinkQnCardTitle title={query.data.title} />
          <MPermalinkQnCardTags tag={query.data.tags} />
          <MPermalinkQnCardBody body={query.data.body} />
          <MPermalinkQnCardMoreSecondary />
          <MPermalinkQnCardStats />
        </Stack>
      )}
    </>
  )
}

//  permalink={query.data.permalink}
//  title={query.data.title}
//  body={query.data.body}
//  location={query.data.profile.location}
//  tag={query.data.tags}
