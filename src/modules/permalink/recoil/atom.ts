import { atom } from 'recoil'

export const permalinkDataStatusAtom = atom<'isLoading' | 'isSuccess' | 'isError'>({
  key: 'permalinkDataStatus',
  default: 'isSuccess',
})

// const [permalinkDataStatus, setPermalinkDataStatus] = useRecoilState(permalinkDataStatusAtom)
// const setPermalinkDataStatus = useSetRecoilState(permalinkDataStatusAtom)
// const permalinkDataStatus = useRecoilValue(permalinkDataStatusAtom)
