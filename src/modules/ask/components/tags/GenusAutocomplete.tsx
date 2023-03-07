import React from 'react'

import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { trpc } from '@src/utils/trpc'

interface IGenusAutocomplete {
  familyValue: string
  genusValue: string
  setGenusValue: React.Dispatch<React.SetStateAction<string>>
}
interface IGenus {
  genus: string
}

export default function GenusAutocomplete({
  familyValue,
  genusValue,
  setGenusValue,
}: IGenusAutocomplete) {
  const listGenus = trpc.species.filterGenus.useQuery({ selectedFamily: familyValue })

  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState<readonly IGenus[]>([])
  const loading = open && options.length === 0

  React.useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    const genusData =
      listGenus.data !== undefined ? listGenus.data.dedupGenus : [{ genus: 'undefined' }]

    if (genusData !== undefined) {
      ;(async () => {
        if (active) {
          setOptions([...genusData])
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
      {familyValue !== '' && (
        <Autocomplete
          open={open}
          onOpen={() => {
            setOpen(true)
          }}
          onClose={() => {
            setOpen(false)
          }}
          isOptionEqualToValue={(option, value) => option.genus === value.genus}
          getOptionLabel={option => option.genus}
          options={options}
          loading={loading}
          inputValue={genusValue}
          onInputChange={(event, newInputValue) => {
            setGenusValue(newInputValue)
          }}
          disablePortal
          id='genus'
          autoHighlight
          sx={{ width: 300 }}
          renderInput={params => <TextField {...params} label='Genus' />}
        />
      )}
      <Typography variant='h6' sx={{ pt: 1 }}>
        {genusValue}
      </Typography>
    </Stack>
  )
}
