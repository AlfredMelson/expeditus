import React from 'react'

import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkIcon from '@mui/icons-material/Link'
import TwitterIcon from '@mui/icons-material/Twitter'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { motion } from 'framer-motion'

interface IShareQuestionCard {
  title: string
  userSessionID?: string
  handleClose?: () => void
}

export default function ShareQuestionCard({ title, handleClose }: IShareQuestionCard) {
  const slug = 'test'

  const [copy, setCopy] = React.useState(false)

  const copyToClipboard = async (txt: string) => {
    try {
      const clipboardItem = new ClipboardItem({
        'text/plain': new Blob([txt], { type: 'text/plain' }),
      })
      await navigator.clipboard.write([clipboardItem])
    } catch (error) {
      await navigator.clipboard.writeText(txt)
    }
    setCopy(true)
  }

  return (
    <Card sx={{ maxWidth: '230px' }}>
      <Stack direction='row' alignItems='center' spacing={2} sx={{ ml: 2, mr: 1, my: 1 }}>
        <ListItemText>Share question</ListItemText>
        <div style={{ flexGrow: 1 }} />
        <Tooltip title='Close'>
          <IconButton onClick={handleClose}>
            <CloseIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      </Stack>
      <Stack direction='column' sx={{ mt: 2, mx: 2 }}>
        <Typography variant='body1'>"{title} ?"</Typography>
      </Stack>
      <Divider variant='fullWidth' sx={{ mt: 1.5 }} />
      <MenuList>
        {copy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>
            <MenuItem
              sx={{
                cursor: 'default',
                color: theme => theme.palette.success.main,
                '&:hover': {
                  color: theme => theme.palette.success.light,
                  backgroundColor: 'transparent',
                },
              }}>
              <ListItemIcon>
                <CheckIcon
                  fontSize='small'
                  sx={{
                    color: theme => theme.palette.success.main,
                    '&:hover': {
                      color: theme => theme.palette.success.light,
                      backgroundColor: 'transparent',
                    },
                  }}
                />
              </ListItemIcon>
              <ListItemText>Copied to clipboard</ListItemText>
            </MenuItem>
          </motion.div>
        )}
        {!copy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>
            <MenuItem onClick={() => copyToClipboard(`https://Expeditus.vercel.app/s/${slug}`)}>
              <ListItemIcon>
                <LinkIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText>Copy link</ListItemText>
            </MenuItem>
          </motion.div>
        )}
        <MenuItem>
          <ListItemIcon>
            <TwitterIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Tweet link</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FacebookIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Share on Facebook</ListItemText>
        </MenuItem>
      </MenuList>
    </Card>
  )
}
