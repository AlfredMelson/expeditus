import React from 'react'

import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import MuiAccordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import ListItemIcon from '@mui/material/ListItemIcon'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'

import { MTagCardActionsList } from '@modules/common/components/tag-drawer'
import { CapitalizeTag } from '@modules/common/func'
import { MListItemTextSx } from '@modules/prompts/components/mui'

import type { AccordionProps } from '@mui/material/Accordion'
import type { AccordionSummaryProps } from '@mui/material/AccordionSummary'

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters {...props} />)(
  () => ({
    p: 0,
    m: 0,
    border: 'none',
    '&:before': {
      display: 'none',
    },
  }),
)

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  marginTop: 0,
  marginBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  height: '47px',
  '& .MuiListItemText-root': {
    color: theme.palette.text.primary,
  },
}))

interface IMTagCardActionsShare {
  tagName: string
}

export default function MTagCardActionsShare({ tagName }: IMTagCardActionsShare) {
  const [expanded, setExpanded] = React.useState<boolean>(false)

  const handleChange = () => {
    setExpanded(!expanded)
  }

  return (
    <Accordion
      onChange={handleChange}
      sx={theme => ({
        background: theme.palette.background.paper,
      })}>
      <AccordionSummary>
        <MenuItem sx={{ width: '100%' }}>
          <ListItemIcon>
            <ShareOutlinedIcon />
          </ListItemIcon>
          <MListItemTextSx>{`Share link to ${CapitalizeTag(tagName)}`}</MListItemTextSx>
        </MenuItem>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0, m: 0 }}>
        <MTagCardActionsList />
      </AccordionDetails>
    </Accordion>
  )
}
