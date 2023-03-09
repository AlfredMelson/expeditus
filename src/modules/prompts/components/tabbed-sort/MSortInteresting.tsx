import React from 'react'

import { useQueryClient } from '@tanstack/react-query'
import { motion } from 'framer-motion'

import { useSetRecoilState } from 'recoil'

import { summaryContainer, summaryItem } from '@modules/prompts/animation'
import { MSummary, MSummarySkeleton } from '@modules/prompts/components/summary'

import { MTabPanel, MTabPanelBox } from '@modules/prompts/components/tabbed-sort'
import { summaryDataStatusAtom } from '@modules/prompts/recoil'
import { trpc } from '@src/utils/trpc'

// import { useIsIntersecting } from '@modules/prompts/hooks'

interface IMSortInteresting {
  index: number
  value: number
}

export default function MSortInteresting({ value, index }: IMSortInteresting) {
  const setSummaryDataStatus = useSetRecoilState(summaryDataStatusAtom)

  const client = useQueryClient()
  console.log('client', client)

  // const [lastQuestionViewedId, setLastQuestionViewedId] = useRecoilState(lastQuestionViewedIdAtom)
  // console.log('lastQuestionViewedId -->', lastQuestionViewedId)

  // React.useEffect(() => {
  //   // This effect keeps track of the last viewed question in the modal to keep the index page in sync when the user navigates back
  //   if (lastQuestionViewedId !== null) {
  //     document
  //       .querySelector(`.question-${lastQuestionViewedId}`)
  //       .scrollIntoView({ block: 'center' })
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [lastQuestionViewedId])

  const query = trpc.question.list.useInfiniteQuery(
    { limit: 8 },
    {
      getNextPageParam: lastPage => lastPage.nextCursor,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: true,
      staleTime: Infinity,
    },
  )

  React.useEffect(() => {
    if (query.isLoading) {
      setSummaryDataStatus('isLoading')
    }
    if (query.isError) {
      setSummaryDataStatus('isError')
    }

    setSummaryDataStatus('isSuccess')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  // const [isLoadMoreVisible, ref] = useIsIntersecting<HTMLDivElement>()
  // const fetchNextPageRef = React.useRef(query.fetchNextPage)
  // fetchNextPageRef.current = query.fetchNextPage

  // React.useEffect(() => {
  //   if (isLoadMoreVisible && query.hasNextPage && !query.isFetching) {
  //     fetchNextPageRef.current()
  //   }
  // }, [isLoadMoreVisible, query.hasNextPage, query.isFetching])
  //
  // <div ref={ref}>{query.isFetchingNextPage && <SummarySkeleton />}</div>

  return (
    <MTabPanel value={value} index={index}>
      {query.isLoading && <MSummarySkeleton />}
      {query.isError && <MSummarySkeleton />}
      {query.isSuccess && (
        <motion.div
          className='container'
          variants={summaryContainer}
          initial='hidden'
          animate='visible'>
          {query.data &&
            query.data.pages.map(page =>
              page.items.map(question => {
                return (
                  <motion.div
                    key={question.id}
                    id={`question-${question.id}`}
                    variants={summaryItem}>
                    <MTabPanelBox>
                      <MSummary
                        client={client}
                        id={question.id}
                        views={question._count.views}
                        watching={question._count.watching}
                        username={question.author.username}
                        image={question.author.image}
                        createdAt={question.author.createdAt}
                        permalink={question.permalink}
                        title={question.title}
                        body={question.body}
                        location={question.author.location}
                        tag={question.tags}
                      />
                    </MTabPanelBox>
                  </motion.div>
                )
              }),
            )}
        </motion.div>
      )}
    </MTabPanel>
  )
}
