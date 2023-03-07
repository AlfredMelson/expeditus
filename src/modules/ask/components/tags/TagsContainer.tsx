import Card from '@mui/material/Card'

import { PlantTagSelector, SoilTagSelector, TagsHeader } from '@modules/ask/components/tags'

export default function TagsContainer() {
  return (
    <Card variant='outlined' sx={{ borderStyle: 'none', px: 3, py: 2, mb: 1 }}>
      <TagsHeader />
      <PlantTagSelector />
      <SoilTagSelector />
    </Card>
  )
}
