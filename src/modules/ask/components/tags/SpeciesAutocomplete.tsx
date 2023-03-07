import React from 'react'

import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { trpc } from '@src/utils/trpc'

interface ISpeciesAutocomplete {
  genusValue: string
  speciesValue: string
  setSpeciesValue: React.Dispatch<React.SetStateAction<string>>
}

interface ISpecies {
  species: string
}

export default function SpeciesAutocomplete({
  genusValue,
  speciesValue,
  setSpeciesValue,
}: ISpeciesAutocomplete) {
  const listSpecies = trpc.species.filterSpecies.useQuery({ selectedGenus: genusValue })

  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState<readonly ISpecies[]>([])
  const loading = open && options.length === 0

  React.useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    const speciesData =
      listSpecies.data !== undefined ? listSpecies.data.dedupSpecies : [{ species: 'undefined' }]

    // if (speciesData !== undefined) {
    //   if (speciesData.length === 1) {
    //     setSpeciesValue(speciesData[0].species)
    //   }
    // }

    if (speciesData !== undefined) {
      ;(async () => {
        if (active) {
          setOptions([...speciesData])
        }
      })()

      return () => {
        active = false
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  React.useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={1}>
      {genusValue !== '' && (
        <Autocomplete
          open={open}
          onOpen={() => {
            setOpen(true)
          }}
          onClose={() => {
            setOpen(false)
          }}
          isOptionEqualToValue={(option, value) => option.species === value.species}
          getOptionLabel={option => option.species}
          options={options}
          loading={loading}
          inputValue={speciesValue}
          onInputChange={(event, newInputValue) => {
            setSpeciesValue(newInputValue)
          }}
          disablePortal
          id='species'
          sx={{ width: 300 }}
          renderInput={params => <TextField {...params} label='Species' />}
        />
      )}
      <Typography variant='h6' sx={{ pt: 1 }}>
        {speciesValue}
      </Typography>
    </Stack>
  )
}
