import { motion } from 'framer-motion'

import { summaryContainer, summaryItem } from '@modules/prompts/animation'
import { Summary, SummarySkeleton } from '@modules/prompts/components/summary'

import { TabPanel, TabPanelBox } from '@modules/prompts/components/tabbed-sort'
import { trpc } from '@src/utils/trpc'

// import { useIsIntersecting } from '@modules/prompts/hooks'

interface ISortInteresting {
  index: number
  value: number
}

export default function SortInteresting({ value, index }: ISortInteresting) {
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
    <TabPanel value={value} index={index}>
      {query.isLoading && <SummarySkeleton />}
      {query.isError && <SummarySkeleton />}
      <motion.div
        className='container'
        variants={summaryContainer}
        initial='hidden'
        animate='visible'>
        {query.isSuccess &&
          query.data &&
          query.data.pages.map(page =>
            page.items.map(question => {
              return (
                <motion.div key={question.id} variants={summaryItem}>
                  <TabPanelBox questionId={question.id}>
                    <Summary
                      title={question.title}
                      permalink={question.permalink}
                      questionId={question.id}
                    />
                  </TabPanelBox>
                </motion.div>
              )
            }),
          )}
      </motion.div>
    </TabPanel>
  )
}
