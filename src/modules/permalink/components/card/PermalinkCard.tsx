import Card from '@mui/material/Card'

import { useRouter } from 'next/router'

import {
  PermalinkCardBody,
  PermalinkCardFooter,
  PermalinkCardHeader,
} from '@modules/permalink/components/card'
import { PermalinkNotFound } from '@modules/permalink/components/not-found'
import { PermalinkSkeleton } from '@modules/permalink/components/skeleton'

import { trpc } from '@src/utils/trpc'

export default function PermalinkCard() {
  const router = useRouter()

  const permalink = router.query.permalink as unknown as string

  const query = trpc.question.findByPermalink.useQuery({
    permalink,
  })

  console.log('permalink query: ', query)

  const username = 'username'
  const image = 'image'
  const createdAt = new Date()

  return (
    <>
      {query.isLoading && <PermalinkSkeleton />}
      {query.isError && <PermalinkNotFound headTitle={permalink} />}
      {query.isSuccess && query.data && (
        <Card variant='outlined' sx={{ borderStyle: 'none', p: '20px' }}>
          <PermalinkCardHeader username={username} image={image} createdAt={createdAt} />
          <PermalinkCardBody />
          <PermalinkCardFooter />
        </Card>
      )}
    </>
  )
}
