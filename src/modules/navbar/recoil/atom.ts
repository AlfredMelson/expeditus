import { atom } from 'recoil'

export const accountDrawerVisabilityAtom = atom<boolean>({
  key: 'accountDrawerVisability',
  default: false,
})

// const [accountDrawerVisability, setAccountDrawerVisability] = useRecoilState(accountDrawerVisabilityAtom)
// const setAccountDrawerVisability = useSetRecoilState(accountDrawerVisabilityAtom)
// const accountDrawerVisability = useRecoilValue(accountDrawerVisabilityAtom)

export const signupBenefitsDialogAtom = atom<boolean>({
  key: 'signupBenefitsDialog',
  default: false,
})

// const [signupBenefitsDialog, setSignupBenefitsDialog] = useRecoilState(signupBenefitsDialogAtom)
// const setSignupBenefitsDialog = useSetRecoilState(signupBenefitsDialogAtom)
// const signupBenefitsDialog = useRecoilValue(signupBenefitsDialogAtom)
