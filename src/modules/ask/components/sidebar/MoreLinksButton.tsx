import React from 'react'

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined'
import Card from '@mui/material/Card'
import Collapse from '@mui/material/Collapse'
import Fade from '@mui/material/Fade'

import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { MuiExpandButton } from '@modules/common/components/button'

export default function MoreLinksButton() {
  const [cardExpansion, setCardExpansion] = React.useState<boolean>(false)

  const handleCardExpansion = () => {
    setCardExpansion(!cardExpansion)
  }

  return (
    <Fade in timeout={1500}>
      <Card
        sx={{
          px: 2,
          py: 1,
          maxWidth: 360,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
        }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <MuiExpandButton
            buttonVariant='text'
            buttonFontSize={15}
            onClick={handleCardExpansion}
            buttonText='More helpful links'
          />
          <IconButton onClick={handleCardExpansion}>
            {cardExpansion ? <DoDisturbOnOutlinedIcon /> : <AddCircleOutlineOutlinedIcon />}
          </IconButton>
        </Stack>
        <Collapse in={cardExpansion} timeout='auto' unmountOnExit>
          <ul>
            <li>
              <Typography variant='body1' sx={{ mt: 1 }}>
                Find more information about how to ask a good question here
              </Typography>
            </li>
          </ul>
        </Collapse>
      </Card>
    </Fade>
  )
}
