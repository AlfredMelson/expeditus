import React from 'react'

import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import FamilyAutocomplete from './FamilyAutocomplete'
import GenusAutocomplete from './GenusAutocomplete'
import SpeciesAutocomplete from './SpeciesAutocomplete'

export default function PlantTagSelector() {
  const [familyValue, setFamilyValue] = React.useState<string>('')
  const [genusValue, setGenusValue] = React.useState<string>('')
  const [speciesValue, setSpeciesValue] = React.useState<string>('')

  // family 'Poaceae'
  // genus 'Coelachyrum'
  // species 'piercei'

  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Box>
      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
        <Checkbox
          size='small'
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='plant family, genus, or specific species'
        />
        <Typography variant='body1' sx={{ pt: '3px' }}>
          Is your question related to a plant family, genus, or specific species?
        </Typography>
        <IconButton>
          <HelpCenterIcon fontSize='medium' />
        </IconButton>
      </Stack>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <FamilyAutocomplete familyValue={familyValue} setFamilyValue={setFamilyValue} />
        <GenusAutocomplete
          familyValue={familyValue}
          genusValue={genusValue}
          setGenusValue={setGenusValue}
        />
        <SpeciesAutocomplete
          genusValue={genusValue}
          speciesValue={speciesValue}
          setSpeciesValue={setSpeciesValue}
        />
      </Collapse>
    </Box>
  )
}
