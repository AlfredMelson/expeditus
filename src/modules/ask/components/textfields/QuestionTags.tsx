// import React from 'react'

// import Chip from '@mui/material/Chip'
// import Input from '@mui/material/Input'
// import Stack from '@mui/material/Stack'

// interface ITag {
//   onDeleteTag: (tag: string) => void
//   value: string
// }

// export function Tag({ onDeleteTag, value }: ITag) {
//   const tag = (
//     <>
//       <span onClick={() => onDeleteTag(value)}>&#x2716; </span>
//       {value}
//     </>
//   )

//   return <React.Fragment>{tag}</React.Fragment>
// }

// interface ITags {
//   onDeleteTag: (tag: string) => void
//   tags: string[]
// }

// export function TagList({ tags, onDeleteTag }: ITags) {
//   const tagsUI = tags.map(tag => {
//     return <Tag onDeleteTag={() => onDeleteTag(tag)} key={tag} value={tag} />
//   })

//   return <>{tagsUI}</>
// }

// interface IInputTag {
//   defaultTags: string[]
//   onAddTag: (tag: string) => void
//   onDeleteTag: (tag: string) => void
//   placeholder: string
// }

// export function InputTag({ defaultTags, onAddTag, onDeleteTag, placeholder }: IInputTag) {
//   const [tags, setTags] = React.useState([])

//   React.useEffect(() => {
//     setTags(defaultTags)
//   }, [defaultTags])

//   const onKeyUp = e => {
//     // Space -> 32 and enter is 13
//     // comma (188) ,  separator
//     // if (e.which === 32 || e.which === 13) {
//     if (e.which === 188 || e.which === 13) {
//       const input = e.target.value.trim().split(',')

//       // empty tags
//       if (input.length === 0 || input[0] === '') return

//       onAddTag(input)
//       e.target.value = ''
//     }
//   }

//   // const onDelete = tag => {
//   //   onDeleteTag(tag)
//   // }
//   // const inputProps = {
//   //   onKeyUp: onKeyUp,
//   //   onAddTag: onAddTag,
//   //   onDeleteTag: onDeleteTag,
//   //   defaultTags: tags,
//   // }

//   return (
//     <>
//       <TagList tags={tags} onDeleteTag={onDeleteTag} />
//       <Stack direction='row' spacing={1}>
//         {tags.map(tag => (
//           <Chip key={tag} label={tag} variant='outlined' onDelete={onDeleteTag} />
//         ))}
//       </Stack>
//       <Input onKeyUp={e => onKeyUp(e)} type='text' placeholder={placeholder} />
//       {/* <TextField fullWidth inputProps={inputProps} placeholder='enter tags separated by comma' /> */}
//     </>
//   )
// }

// export default function QuestionTags() {
//   const [tags, setTags] = React.useState([])

//   const onAddTag = (tag: string) => {
//     setTags([...tags, tag])
//   }

//   const onDeleteTag = (tag: string) => {
//     alert(`deleting ${tag}`)
//     const remainingTags = tags.filter(t => {
//       return t !== tag
//     })
//     setTags([...remainingTags])
//   }

//   return (
//     <>
//       <InputTag
//         onAddTag={onAddTag}
//         onDeleteTag={onDeleteTag}
//         defaultTags={tags}
//         placeholder='enter tags separated by comma'
//       />
//       <div>You can also press &lt;return&gt; or &lt;enter&gt; key</div>
//     </>
//   )
// }
export default function QuestionTags() {
  return <div>You can also press &lt;return&gt; or &lt;enter&gt; key</div>
}
