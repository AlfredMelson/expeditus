import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { useSession } from 'next-auth/react'
import { useSetRecoilState } from 'recoil'

import { signupBenefitsDialogAtom } from '@modules/navbar/recoil'

import TagCardActionsShareList from './TagCardActionsShareList'

interface ITagCardActions {
  handleClose?: () => void
  tagName: string
}

export default function TagCardActions({ handleClose, tagName }: ITagCardActions) {
  const { status } = useSession()
  const setSignupBenefitsDialog = useSetRecoilState(signupBenefitsDialogAtom)

  return (
    <>
      <MenuList>
        <MenuItem divider onClick={handleClose}>
          <ListItemIcon>
            <ManageSearchOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>{`Search questions with ${tagName}`}</ListItemText>
        </MenuItem>
        <TagCardActionsShareList />
        {status === 'authenticated' ? (
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AddOutlinedIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText>{`Add ${tagName} to your watchlist`}</ListItemText>
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() => setSignupBenefitsDialog(true)}
            sx={{
              color: theme => theme.palette.warning.main,
              '&:hover': {
                color: theme => theme.palette.warning.light,
                backgroundColor: 'transparent',
              },
            }}>
            <ListItemIcon>
              <LoginOutlinedIcon
                fontSize='small'
                sx={{
                  color: theme => theme.palette.warning.main,
                  '&:hover': {
                    color: theme => theme.palette.warning.light,
                  },
                }}
              />
            </ListItemIcon>
            <ListItemText>{`Sign in to add to your watchlist`}</ListItemText>
          </MenuItem>
        )}
      </MenuList>
    </>
  )
}
