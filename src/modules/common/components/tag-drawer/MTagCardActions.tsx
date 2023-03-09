import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined'
import ListItemIcon from '@mui/material/ListItemIcon'

import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { useSession } from 'next-auth/react'

import { MTagCardActionsShare } from '@modules/common/components/tag-drawer'
import { CapitalizeTag } from '@modules/common/func'
import { MListItemTextSx } from '@modules/prompts/components/mui'

interface IMTagCardActions {
  tagName: string
  handleClose: () => void
  handlesignupBenefitsDialog: () => void
}

export default function MTagCardActions({
  tagName,
  handleClose,
  handlesignupBenefitsDialog,
}: IMTagCardActions) {
  const { status } = useSession()

  return (
    <>
      <MenuList>
        <MenuItem divider onClick={handleClose}>
          <ListItemIcon>
            <ManageSearchOutlinedIcon fontSize='medium' />
          </ListItemIcon>
          <MListItemTextSx>{`Search questions with ${CapitalizeTag(tagName)}`}</MListItemTextSx>
        </MenuItem>
        {status === 'authenticated' ? (
          <MenuItem divider onClick={handleClose}>
            <ListItemIcon>
              <AddOutlinedIcon fontSize='medium' />
            </ListItemIcon>
            <MListItemTextSx>{`Add ${CapitalizeTag(tagName)} to your watchlist`}</MListItemTextSx>
          </MenuItem>
        ) : (
          <MenuItem
            divider
            onClick={handlesignupBenefitsDialog}
            sx={{
              color: theme => theme.palette.warning.main,
              '&:hover': {
                color: theme => theme.palette.warning.main,
                backgroundColor: 'transparent',
              },
            }}>
            <ListItemIcon>
              <LoginOutlinedIcon
                fontSize='medium'
                sx={{
                  color: theme => theme.palette.warning.main,
                }}
              />
            </ListItemIcon>
            <MListItemTextSx>{`Sign in to add to your watchlist`}</MListItemTextSx>
          </MenuItem>
        )}
      </MenuList>
      <MTagCardActionsShare tagName={tagName} />
    </>
  )
}
