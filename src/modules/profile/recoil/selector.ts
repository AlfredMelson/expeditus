import { atom, selector } from 'recoil'

import { dateDelayHours } from '@modules/profile/recoil/userStatusDelay'

export const statusCreatedDBAtom = atom<number | undefined>({
  key: 'statusCreatedDB',
  default: undefined,
})

// const [statusCreatedDB, setStatusCreatedDB] = useRecoilState(statusCreatedDBAtom)
// const setStatusCreatedDB = useSetRecoilState(statusCreatedDBAtom)
// const statusCreatedDB = useRecoilValue(statusCreatedDBAtom)

export const statusUpdatedDBAtom = atom<number | undefined>({
  key: 'statusUpdatedDB',
  default: undefined,
})

// const [statusUpdatedDB, setStatusUpdatedDB] = useRecoilState(statusUpdatedDBAtom)
// const setStatusUpdatedDB = useSetRecoilState(statusUpdatedDBAtom)
// const statusUpdatedDB = useRecoilValue(statusUpdatedDBAtom)

export const expiresAtDBAtom = atom<number>({
  key: 'expiresAtDB',
  default: 0,
})

// const [expiresAtDB, setExpiresAtDB] = useRecoilState(expiresAtDBAtom)
// const setExpiresAtDB = useSetRecoilState(expiresAtDBAtom)
// const expiresAtDB = useRecoilValue(expiresAtDBAtom)

export const expireIntervalDBAtom = atom<number>({
  key: 'expireIntervalDB',
  default: 0,
})

// const [expireIntervalDB, setExpireIntervalDB] = useRecoilState(expireIntervalDBAtom)
// const setExpireIntervalDB = useSetRecoilState(expireIntervalDBAtom)
// const expireIntervalDB = useRecoilValue(expireIntervalDBAtom)

export const statusExpirationSelector = selector<number>({
  key: 'hoursTillExpire',
  get: ({ get }) => {
    const expiresAtDB = get(expiresAtDBAtom)

    return Math.floor(dateDelayHours(expiresAtDB as number).getTime() / 1000.0)
  },
  set: ({ set, get }) => {
    const statusCreatedDB = get(statusCreatedDBAtom)
    const expiresAtDB = get(expiresAtDBAtom)
    const hoursTillExpire = (statusCreatedDB as number) - (expiresAtDB as number)
    set(expiresAtDBAtom, hoursTillExpire)
  },
})

// const [hoursTillExpire, setHoursTillExpire] = useRecoilState(statusExpirationSelector)
// const setHoursTillExpire = useSetRecoilState(statusExpirationSelector)
// const hoursTillExpire = useRecoilValue(statusExpirationSelector)
