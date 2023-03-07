import React from 'react'

import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import { Card } from '@mui/material'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { MuiButton } from '@modules/common/components/button'
import { ROUTES } from '@modules/permalink/constants'

// import { dateTypeConversion } from '@modules/permalink/func/dataTypeConversion'

interface IEngagementDropdown {
  dateCreated: string
  dateUpdated: string
  currentViews?: number
  currentVotes?: number
  currentAnswers?: number
}

export default function EngagementDropdown({
  dateCreated,
  dateUpdated,
  currentViews = 1,
  currentVotes = 2,
  currentAnswers = 3,
}: IEngagementDropdown) {
  const [expanded1, setExpanded1] = React.useState<boolean>(false)
  const [expanded2, setExpanded2] = React.useState<boolean>(false)
  const [expanded3, setExpanded3] = React.useState<boolean>(false)

  const handleChange1 = () => {
    setExpanded1(!expanded1)
  }
  const handleChange2 = () => {
    setExpanded2(!expanded2)
  }
  const handleChange3 = () => {
    setExpanded3(!expanded3)
  }

  // convert date to string
  // const created = new Date(dateTypeConversion(dateCreated)).toDateString()
  // const updated = new Date(dateTypeConversion(dateUpdated)).toDateString()

  const handleChangeSwitch = (index: number) => {
    switch (index) {
      case 0:
        return handleChange1
      case 1:
        return handleChange2
      case 2:
        return handleChange3
    }
  }
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'engagement':
        return <QueryStatsIcon />
      case 'activity':
        return <HistoryOutlinedIcon />
      case 'other':
        return <MiscellaneousServicesOutlinedIcon />
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ width: '100%' }}>
        {ROUTES.ENGAGEMENT.map((route, index) => (
          <MuiButton
            key={index}
            isDisabled={route.icon === 'other'}
            buttonVariant='text'
            onClick={handleChangeSwitch(index)}
            buttonText={route.name}
            startIcon={iconSwitch(route.icon)}
            sx={{ minWidth: '160px' }}
          />
        ))}
      </Stack>
      <Stack direction='column' sx={{ width: '100%' }}>
        <Collapse in={expanded1} timeout='auto' unmountOnExit>
          <Card elevation={0} sx={{ mt: 2, p: 2, backgroundColor: '#171717' }}>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Stack direction='column' justifyContent='flex-start'>
                <Stack direction='row' alignItems='flex-start' spacing={1}>
                  <Typography variant='body1'>Asked:</Typography>
                  <Typography variant='body1'>{dateCreated}</Typography>
                </Stack>
                {dateUpdated === dateCreated && (
                  <Stack direction='row' alignItems='flex-start' spacing={1}>
                    <Typography variant='body1'>Updated:</Typography>
                    <Typography variant='body1'>{dateUpdated}</Typography>
                  </Stack>
                )}
              </Stack>
              <Stack direction='column' justifyContent='flex-start'>
                <Stack direction='row' alignItems='flex-start' spacing={1}>
                  <Typography variant='body1'>Views:</Typography>
                  <Typography variant='body1'>{currentViews}</Typography>
                </Stack>
                <Stack direction='row' alignItems='flex-start' spacing={1}>
                  <Typography variant='body1'>Votes:</Typography>
                  <Typography variant='body1'>{currentVotes}</Typography>
                </Stack>
                <Stack direction='row' alignItems='flex-start' spacing={1}>
                  <Typography variant='body1'>Answers:</Typography>
                  <Typography variant='body1'>{currentAnswers}</Typography>
                </Stack>
              </Stack>
              <Stack direction='column' justifyContent='flex-start'>
                <Stack direction='row' alignItems='flex-start' spacing={1}>
                  <Typography variant='body1'>Asked:</Typography>
                  <Typography variant='body1'>{dateCreated}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </Collapse>
        <Collapse in={expanded2} timeout='auto' unmountOnExit>
          <Card elevation={0} sx={{ mt: 2, p: 2, backgroundColor: '#171717' }}>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Stack direction='column' justifyContent='flex-start'>
                <Stack direction='row' alignItems='flex-start' spacing={1}>
                  <Typography variant='body1'>Asked:</Typography>
                  <Typography variant='body1'>{dateCreated}</Typography>
                </Stack>
                {dateUpdated === dateCreated && (
                  <Stack direction='row' alignItems='flex-start' spacing={1}>
                    <Typography variant='body1'>Updated:</Typography>
                    <Typography variant='body1'>{dateUpdated}</Typography>
                  </Stack>
                )}
              </Stack>
              <Stack direction='column' justifyContent='flex-start'>
                <Stack direction='row' alignItems='flex-start' spacing={1}>
                  <Typography variant='body1'>Views:</Typography>
                  <Typography variant='body1'>{currentViews}</Typography>
                </Stack>
                <Stack direction='row' alignItems='flex-start' spacing={1}>
                  <Typography variant='body1'>Votes:</Typography>
                  <Typography variant='body1'>{currentVotes}</Typography>
                </Stack>
                <Stack direction='row' alignItems='flex-start' spacing={1}>
                  <Typography variant='body1'>Answers:</Typography>
                  <Typography variant='body1'>{currentAnswers}</Typography>
                </Stack>
              </Stack>
              <Stack direction='column' justifyContent='flex-start'>
                <Stack direction='row' alignItems='flex-start' spacing={1}>
                  <Typography variant='body1'>Asked:</Typography>
                  <Typography variant='body1'>{dateCreated}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </Collapse>
        <Collapse in={expanded3} timeout='auto' unmountOnExit></Collapse>
      </Stack>
    </Box>
  )
}
