import React from 'react'

import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { fahrenheitToCelcius } from '@modules/ask/func/fahrenheitToCelcius'
import { hardinessZones } from '@modules/ask/func/hardinessZones'

import type { SelectChangeEvent } from '@mui/material/Select'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    sx: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
}

interface IHardinessMenu {
  setHardinessValue: React.Dispatch<React.SetStateAction<string>>
}

export default function HardinessMenu({ setHardinessValue }: IHardinessMenu) {
  const listHardinessZones = hardinessZones()

  const [selectedZone, setSelectedZone] = React.useState('')
  console.log('selectedZone', selectedZone)
  const [open, setOpen] = React.useState(false)

  const handleChange = (event: SelectChangeEvent) => {
    //pass the zone name to setSelectedZone()
    if (event.target.value === undefined) {
      setSelectedZone('0a')
    }
    if (event.target.value !== undefined) {
      setSelectedZone(event.target.value as string)
      setOpen(false)
      setHardinessValue(event.target.value as string)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={1}>
        <Typography variant='body1' sx={{ pt: 1, pl: '49px' }}>
          Minimum winter temperature range
        </Typography>

        <Select
          autoWidth
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selectedZone}
          onChange={handleChange}
          MenuProps={MenuProps}>
          {listHardinessZones.map(item => (
            <MenuItem key={item.zone} value={item.zone}>
              <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={1}>
                <Typography variant='body1'>from</Typography>
                <Typography variant='body1'>
                  {item.start} °F ( {fahrenheitToCelcius(item.start)} °C )
                </Typography>
                <Typography variant='body1'>to </Typography>
                <Typography variant='body1'>
                  {item.end} °F ( {fahrenheitToCelcius(item.end)} °C )
                </Typography>
              </Stack>
            </MenuItem>
          ))}
        </Select>

        <Typography variant='body1' sx={{ pt: 1 }}>
          is Plant Hardiness zone {selectedZone}.
        </Typography>
      </Stack>

      <Typography variant='body1' sx={{ pt: 1, pl: '49px' }}>
        The Plant Hardiness zone is the standard by which gardeners and growers can determine which
        plants are most likely to thrive at a location. The zones based on the average annual
        minimum winter temperature, divided into 10-degree Fahrenheit zones.
      </Typography>
    </>
  )
}

// Create a javascript function that returns a list of zones starting from 0a and going to 13b with each zone having a starting and ending temperature.  Zone 0a is the coldest and zone 13b is the warmest.  Zone 0a has a starting temperature of -60 and an ending temperature of -50. The sequense of zones start with a number followed by either a or b.  Zone 13b has a starting temperature of 60 and an ending temperature of 70.  The zones are based on the average annual minimum winter temperature, divided into 10-degree Fahrenheit zones.
