import { atom } from 'recoil'

export const sortQnAuthorHoverIdAtom = atom<string | null>({
  key: 'sortQnAuthorHoverId',
  default: null,
})

// const [sortQnAuthorHoverId, setSortQnAuthorHoverId] = useRecoilState(sortQnAuthorHoverIdAtom)
// const setSortQnAuthorHoverId = useSetRecoilState(sortQnAuthorHoverIdAtom)
// const sortQnAuthorHoverId = useRecoilValue(sortQnAuthorHoverIdAtom)

export const sortQuestionHoverIdAtom = atom<string | null>({
  key: 'sortQuestionHoverId',
  default: null,
})

// const [sortQuestionHoverId, setSortQuestionHoverId] = useRecoilState(sortQuestionHoverIdAtom)
// const setSortQuestionHoverId = useSetRecoilState(sortQuestionHoverIdAtom)
// const sortQuestionHoverId = useRecoilValue(sortQuestionHoverIdAtom)

export const sortQuestionTabIdAtom = atom<number>({
  key: 'sortQuestionTabId',
  default: 0,
})

// const [sortQuestionTabId, setSortQuestionTabId] = useRecoilState(sortQuestionTabIdAtom)
// const setSortQuestionTabId = useSetRecoilState(sortQuestionTabIdAtom)
// const sortQuestionTabId = useRecoilValue(sortQuestionTabIdAtom)

export const mobileDrawerOpenAtom = atom<boolean>({
  key: 'mobileDrawerOpen',
  default: false,
})

// const [mobileDrawerOpen, setMobileDrawerOpen] = useRecoilState(mobileDrawerOpenAtom)
// const setMobileDrawerOpen = useSetRecoilState(mobileDrawerOpenAtom)
// const mobileDrawerOpen = useRecoilValue(mobileDrawerOpenAtom)

export const summaryDataStatusAtom = atom<'isLoading' | 'isSuccess' | 'isError'>({
  key: 'summaryDataStatus',
  default: 'isSuccess',
})

// const [summaryDataStatus, setSummaryDataStatus] = useRecoilState(summaryDataStatusAtom)
// const setSummaryDataStatus = useSetRecoilState(summaryDataStatusAtom)
// const summaryDataStatus = useRecoilValue(summaryDataStatusAtom)

export const lastQuestionViewedIdAtom = atom<string | null>({
  key: 'lastQuestionViewedId',
  default: null,
})

// const [lastQuestionViewedId, setLastQuestionViewedId] = useRecoilState(lastQuestionViewedIdAtom)
// const setLastQuestionViewedId = useSetRecoilState(lastQuestionViewedIdAtom)
// const lastQuestionViewedId = useRecoilValue(lastQuestionViewedIdAtom)
