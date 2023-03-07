import React from 'react'

import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { trpc } from '@src/utils/trpc'

interface IFamilyAutocomplete {
  familyValue: string
  setFamilyValue: React.Dispatch<React.SetStateAction<string>>
}

interface IFamilies {
  family: string
}

export default function FamilyAutocomplete({ familyValue, setFamilyValue }: IFamilyAutocomplete) {
  const listFamilies = trpc.species.listFamilies.useQuery()

  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState<readonly IFamilies[]>([])
  const loading = open && options.length === 0

  React.useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    const familyData =
      listFamilies.data !== undefined ? listFamilies.data.dedupFamily : [{ family: 'undefined' }]

    if (familyData !== undefined) {
      ;(async () => {
        if (active) {
          setOptions([...familyData])
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
      <Autocomplete
        open={open}
        onOpen={() => {
          setOpen(true)
        }}
        onClose={() => {
          setOpen(false)
        }}
        isOptionEqualToValue={(option, value) => option.family === value.family}
        getOptionLabel={option => option.family}
        options={options}
        loading={loading}
        inputValue={familyValue}
        onInputChange={(event, newInputValue) => {
          setFamilyValue(newInputValue)
        }}
        disablePortal
        id='family'
        sx={{ width: 300 }}
        renderInput={params => <TextField {...params} label='Family' />}
      />
      <Typography variant='h6' sx={{ pt: 1 }}>
        {familyValue}
      </Typography>
    </Stack>
  )
}
