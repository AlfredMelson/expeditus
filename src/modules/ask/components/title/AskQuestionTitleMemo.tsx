import React from 'react'

import TextField from '@mui/material/TextField'

import type { UseFormReturn } from 'react-hook-form'

interface IAskQuestionTitleMemo {
  methods: UseFormReturn
  title: string
}

const AskQuestionTitleMemo = React.memo(
  ({ methods, title }: IAskQuestionTitleMemo) => (
    <TextField
      variant='outlined'
      error={!!methods.formState.errors[title]}
      fullWidth
      margin='dense'
      {...methods.register(title)}
    />
  ),
  (prevProps, nextProps) => {
    return (
      prevProps.methods.formState.isDirty === nextProps.methods.formState.isDirty &&
      prevProps.methods.formState.errors !== nextProps.methods.formState.errors
    )
  },
)

export default AskQuestionTitleMemo

// helperText={methods.formState.errors[title]?.message ?? ''}
