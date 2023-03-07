import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import { useSetRecoilState } from 'recoil'

import {
  MTagCardHeader,
  MTagCardActions,
  MTagCardAnalytics,
  MTagCardDescription,
} from '@modules/common/components/tag-drawer'
import { signupBenefitsDialogAtom } from '@modules/navbar/recoil'

interface IMShareTag {
  tagName: string
  handleClose: () => void
}

export default function MShareTag({ tagName, handleClose }: IMShareTag) {
  const setSignupBenefitsDialog = useSetRecoilState(signupBenefitsDialogAtom)

  return (
    <>
      <Card
        sx={{
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}>
        <MTagCardHeader tagName={tagName} handleClose={handleClose} />
        <MTagCardDescription />
        <MTagCardAnalytics />
        <Divider variant='fullWidth' sx={{ mt: 2 }} />
        <MTagCardActions
          tagName={tagName}
          handlesignupBenefitsDialog={() => setSignupBenefitsDialog(true)}
          handleClose={handleClose}
        />
      </Card>
      <Box sx={{ height: '32px', backgroundColor: '#202124' }} />
    </>
  )
}
