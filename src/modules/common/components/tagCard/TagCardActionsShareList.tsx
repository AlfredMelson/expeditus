import React from 'react'

import CheckIcon from '@mui/icons-material/Check'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkIcon from '@mui/icons-material/Link'
import TwitterIcon from '@mui/icons-material/Twitter'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'

import { motion } from 'framer-motion'

export default function TagCardActionsShareList() {
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
    <>
      <MenuList sx={{ px: 5 }}>
        {copy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>
            <MenuItem
              divider
              sx={theme => ({
                cursor: 'default',
                color: theme.palette.success.main,
                '&:hover': {
                  color: theme.palette.success.light,
                  backgroundColor: 'transparent',
                },
              })}>
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
            <MenuItem
              divider
              onClick={() => copyToClipboard(`https://Expeditus.vercel.app/s/${slug}`)}>
              <ListItemIcon>
                <LinkIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText>Copy link</ListItemText>
            </MenuItem>
          </motion.div>
        )}
        <MenuItem divider>
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
      <Divider variant='fullWidth' />
    </>
  )
}
