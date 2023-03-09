import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

import {
  MSummaryHeader,
  MSummaryContent,
  MSummaryContentTags,
  MSummaryStats,
  MSummaryAuthorLocation,
} from '@modules/prompts/components/summary'

import type { QueryClient } from '@tanstack/react-query'

interface IMSummary {
  client: QueryClient
  id: string
  image: string
  location: string
  username?: string | null
  createdAt: Date
  title: string
  permalink: string
  body: string
  views: number
  watching: number
  tag: { name: string }[]
}

export default function MSummary({
  id,
  image,
  location,
  username,
  createdAt,
  title,
  permalink,
  body,
  tag,
  views,
  watching,
}: IMSummary) {
  return (
    <Stack
      direction='column'
      justifyContent='flex-start,'
      sx={{
        height: '100%',
        px: 2,
      }}>
      <MSummaryHeader username={username} image={image} createdAt={createdAt} />
      <Divider variant='fullWidth' sx={{ mt: 1.5, mb: 2 }} />
      <MSummaryAuthorLocation location={location} />
      <MSummaryContent id={id} body={body} title={title} permalink={permalink} />
      <div style={{ flexGrow: 1 }} />
      <MSummaryContentTags tag={tag} />
      <MSummaryStats views={views} watching={watching} />
    </Stack>
  )
}
