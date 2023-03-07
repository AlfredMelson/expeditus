import { atom } from 'recoil'

export const userStatusModalOpenAtom = atom<boolean>({
  key: 'userStatusModalOpen',
  default: false,
})

// const [userStatusModalOpen, setUserStatusModalOpen] = useRecoilState(userStatusModalOpenAtom)
// const setUserStatusModalOpen = useSetRecoilState(userStatusModalOpenAtom)
// const userStatusModalOpen = useRecoilValue(userStatusModalOpenAtom)

export const emojiVisabilityAtom = atom<boolean>({
  key: 'emojiVisability',
  default: false,
})

// const [emojiVisability, setEmojiVisability] = useRecoilState(emojiVisabilityAtom)
// const setEmojiVisability = useSetRecoilState(emojiVisabilityAtom)
// const emojiVisability = useRecoilValue(emojiVisabilityAtom)

export const suggestionVisabilityAtom = atom<boolean>({
  key: 'suggestionVisability',
  default: false,
})

// const [suggestionVisability, setSuggestionVisability] = useRecoilState(suggestionVisabilityAtom)
// const setSuggestionVisability = useSetRecoilState(suggestionVisabilityAtom)
// const suggestionVisability = useRecoilValue(suggestionVisabilityAtom)

export const suggestionEmojiAtom = atom<string | undefined>({
  key: 'suggestionEmoji',
  default: undefined,
})

// const [suggestionEmoji, setSuggestionEmoji] = useRecoilState(suggestionEmojiAtom)
// const setSuggestionEmoji = useSetRecoilState(suggestionEmojiAtom)
// const suggestionEmoji = useRecoilValue(suggestionEmojiAtom)

export const suggestionTextAtom = atom<string | undefined>({
  key: 'suggestionText',
  default: undefined,
})

// const [suggestionText, setSuggestionText] = useRecoilState(suggestionTextAtom)
// const setSuggestionText = useSetRecoilState(suggestionTextAtom)
// const suggestionText = useRecoilValue(suggestionTextAtom)

export const suggestionSelectedAtom = atom<boolean>({
  key: 'suggestionSelected',
  default: false,
})

// const [suggestionSelected, setSuggestionSelected] = useRecoilState(suggestionSelectedAtom)
// const setSuggestionSelected = useSetRecoilState(suggestionSelectedAtom)
// const suggestionSelected = useRecoilValue(suggestionSelectedAtom)

export const suggestionASelectedAtom = atom<boolean>({
  key: 'suggestionASelected',
  default: false,
})

// const [suggestionASelected, setSuggestionASelected] = useRecoilState(suggestionASelectedAtom)
// const setSuggestionASelected = useSetRecoilState(suggestionASelectedAtom)
// const suggestionASelected = useRecoilValue(suggestionASelectedAtom)

export const suggestionBSelectedAtom = atom<boolean>({
  key: 'suggestionBSelected',
  default: false,
})

// const [suggestionBSelected, setSuggestionBSelected] = useRecoilState(suggestionBSelectedAtom)
// const setSuggestionBSelected = useSetRecoilState(suggestionBSelectedAtom)
// const suggestionBSelected = useRecoilValue(suggestionBSelectedAtom)

export const suggestionCSelectedAtom = atom<boolean>({
  key: 'suggestionCSelected',
  default: false,
})

// const [suggestionCSelected, setSuggestionCSelected] = useRecoilState(suggestionCSelectedAtom)
// const setSuggestionCSelected = useSetRecoilState(suggestionCSelectedAtom)
// const suggestionCSelected = useRecoilValue(suggestionCSelectedAtom)

export const cognitoUsernameAtom = atom<string | undefined>({
  key: 'cognitoUsername',
  default: undefined,
})

// const [cognitoUsername, setCognitoUsername] = useRecoilState(cognitoUsernameAtom)
// const setCognitoUsername = useSetRecoilState(cognitoUsernameAtom)
// const cognitoUsername = useRecoilValue(cognitoUsernameAtom)

//
// READ
//
export const userStatusDBAtom = atom<string | undefined>({
  key: 'userStatusDB',
  default: undefined,
})

// const [userStatusDB, setUserStatusDB] = useRecoilState(userStatusDBAtom)
// const setUserStatusDB = useSetRecoilState(userStatusDBAtom)
// const userStatusDB = useRecoilValue(userStatusDBAtom)

export const userEmojiDBAtom = atom<string | undefined>({
  key: 'userEmojiDB',
  default: undefined,
})

// const [userEmojiDB, setUserEmojiDB] = useRecoilState(userEmojiDBAtom)
// const setUserEmojiDB = useSetRecoilState(userEmojiDBAtom)
// const userEmojiDB = useRecoilValue(userEmojiDBAtom)

export const userIsBusyDBAtom = atom<boolean>({
  key: 'userIsBusyDB',
  default: false,
})

// const [userIsBusyDB, setUserIsBusyDB] = useRecoilState(userIsBusyDBAtom)
// const setUserIsBusyDB = useSetRecoilState(userIsBusyDBAtom)
// const userIsBusyDB = useRecoilValue(userIsBusyDBAtom)

//
// UPDATES
//
export const updatedUserStatusDBAtom = atom<string | undefined>({
  key: 'updatedUserStatusDB',
  default: undefined,
})

// const [updatedUserStatusDB, setUpdatedUserStatusDB] = useRecoilState(updatedUserStatusDBAtom)
// const setUpdatedUserStatusDB = useSetRecoilState(updatedUserStatusDBAtom)
// const updatedUserStatusDB = useRecoilValue(updatedUserStatusDBAtom)

export const updatedUserEmojiDBAtom = atom<string | undefined>({
  key: 'updatedUserEmojiDB',
  default: undefined,
})

// const [updatedUserEmojiDB, setUpdatedUserEmojiDB] = useRecoilState(updatedUserEmojiDBAtom)
// const setUpdatedUserEmojiDB = useSetRecoilState(updatedUserEmojiDBAtom)
// const updatedUserEmojiDB = useRecoilValue(updatedUserEmojiDBAtom)

export const updatedUserIsBusyDBAtom = atom<boolean>({
  key: 'updatedUserIsBusyDB',
  default: false,
})

// const [updatedUserIsBusyDB, setUpdatedUserIsBusyDB] = useRecoilState(updatedUserIsBusyDBAtom)
// const setUpdatedUserIsBusyDB = useSetRecoilState(updatedUserIsBusyDBAtom)
// const updatedUserIsBusyDB = useRecoilValue(updatedUserIsBusyDBAtom)

export const updatedExpireIntervalDBAtom = atom<number>({
  key: 'updatedExpireIntervalDB',
  default: 0,
})

// const [updatedExpireIntervalDB, setUpdatedExpireIntervalDB] = useRecoilState(updatedExpireIntervalDBAtom)
// const setUpdatedExpireIntervalDB = useSetRecoilState(updatedExpireIntervalDBAtom)
// const updatedExpireIntervalDB = useRecoilValue(updatedExpireIntervalDBAtom)

export const updatedExpiresAtDBAtom = atom<number>({
  key: 'updatedExpiresAtDB',
  default: 0,
})

// const [updatedExpiresAtDB, setUpdatedExpiresAtDB] = useRecoilState(updatedExpiresAtDBAtom)
// const setUpdatedExpiresAtDB = useSetRecoilState(updatedExpiresAtDBAtom)
// const updatedExpiresAtDB = useRecoilValue(updatedExpiresAtDBAtom)
