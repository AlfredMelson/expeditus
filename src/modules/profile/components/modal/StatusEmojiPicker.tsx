import Box from '@mui/material/Box'

import EmojiPicker, { EmojiStyle, Theme } from 'emoji-picker-react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'

// import EmojiPicker, {EmojiStyle, SkinTones, Theme, Categories, moji, SuggestionMode, SkinTonePickerLocation} from 'emoji-picker-react'

import {
  emojiVisabilityAtom,
  updatedUserEmojiDBAtom,
  userIsBusyDBAtom,
} from '@modules/profile/recoil'

import type { EmojiClickData } from 'emoji-picker-react'

export default function StatusEmojiPicker() {
  const [emojiVisability, setEmojiVisability] = useRecoilState(emojiVisabilityAtom)
  const setUpdatedUserEmojiDB = useSetRecoilState(updatedUserEmojiDBAtom)

  const userIsBusyDB = useRecoilValue(userIsBusyDBAtom)
  if (userIsBusyDB) {
    setEmojiVisability(false)
  }

  // emojiData has access to the following properties:
  //   activeSkinTone: SkinTones
  //   unified: string
  //   unifiedWithoutSkinTone: string
  //   emoji: string
  //   names: string[]
  //   getImageUrl: (emojiStyle: EmojiStyle) => string

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onEmojiClick(emojiData: EmojiClickData) {
    // console.log(emojiData)
    setUpdatedUserEmojiDB(emojiData.emoji)
    setEmojiVisability(false)
  }

  /*
   * Emoji picker customization
   * https://github.com/ealush/emoji-picker-react#css-variables
   */

  return (
    <Box
      sx={{
        mt: emojiVisability ? '20px' : 0,
        overflow: 'hidden',
        transitionProperty: 'height',
        transition: 'var(--transition-speed-fast)',
        height: emojiVisability ? 'auto' : '0px',
      }}>
      <EmojiPicker
        onEmojiClick={onEmojiClick}
        autoFocusSearch={false}
        theme={Theme.AUTO}
        width='100%'
        lazyLoadEmojis={true}
        emojiStyle={EmojiStyle.APPLE}

        // previewConfig={{
        //   defaultCaption: 'Pick one!',
        //   defaultEmoji: '1f92a', // 🤪
        // }}
        // searchDisabled
        // skinTonePickerLocation={SkinTonePickerLocation.PREVIEW}
        // emojiVersion="0.6"
        // suggestedEmojisMode={SuggestionMode.RECENT}
        // skinTonesDisabled
        // searchPlaceHolder="Filter"
        // defaultSkinTone={SkinTones.MEDIUM}
        // categories={[
        //   {
        //     name: "Fun and Games",
        //     category: Categories.ACTIVITIES
        //   },
        //   {
        //     name: "Smiles & Emotions",
        //     category: Categories.SMILEYS_PEOPLE
        //   },
        //   {
        //     name: "Flags",
        //     category: Categories.FLAGS
        //   },
        //   {
        //     name: "Yum Yum",
        //     category: Categories.FOOD_DRINK
        //   }
        // ]}
      />
    </Box>
  )
}
