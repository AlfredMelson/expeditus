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

interface IMTagCard {
  tagName: string
  handleClose: () => void
}

export default function MTagCard({ tagName, handleClose }: IMTagCard) {
  const setSignupBenefitsDialog = useSetRecoilState(signupBenefitsDialogAtom)

  return (
    <>
      <Card
        sx={{
          background: 'transparent',
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
      <Box sx={{ height: '56px', backgroundColor: 'transparent' }} />
    </>
  )
}
