import React from 'react'

import Alert from '@mui/material/Alert'
import { useForm } from 'react-hook-form'

import { MuiButton } from '@modules/common/components/button'

import { trpc } from '@src/utils/trpc'

import type { CreateSharedQnLink } from '@modules/prompts/types'

export default function CreateSharedLink() {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<CreateSharedQnLink>()
  const [loading, setLoading] = React.useState(false)

  const { mutate, error } = trpc.sharedQnLink.createSharedLink.useMutation({
    onSuccess: () => {
      console.log({
        message: 'shared link created successfully',
      })
      setLoading(false)
    },
    onError: () => {
      setLoading(false)
    },
  })

  const onSubmit = (values: CreateSharedQnLink) => {
    const areEquals = values.url === values.slug
    if (areEquals) {
      return setError('slug', {
        message: 'The original URL and the custom URL cannot be the same',
      })
    }
    setLoading(true)

    mutate(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <Alert>
          <p>{error.message}</p>
        </Alert>
      )}
      <div>
        <label htmlFor='url'>Enter the URL here:</label>
        <input
          id='url'
          type='text'
          placeholder='https://'
          {...register('url', {
            required: {
              value: true,
              message: 'Please enter a URL.',
            },
            minLength: {
              value: 8,
              message: 'Please enter a valid URL. It should be at least 8 characters long.',
            },
            pattern: {
              value: /^https?:\/\//i,
              message: 'Please enter a valid URL. It should start with http:// or https://',
            },
          })}
        />
        {errors.url && <Alert>{errors.url.message}</Alert>}
      </div>
      <div>
        <label htmlFor='slug'>Custom slug:</label>
        <p>https://Expeditus.vercel.app/s/</p>
        <div>
          <input
            id='slug'
            type='text'
            placeholder='Custom slug'
            {...register('slug', {
              required: {
                value: true,
                message: 'Please enter a custom slug or generate a random.',
              },
              pattern: {
                value: /^[a-zA-Z0-9_-]+$/i,
                message: 'Please enter a valid slug without blank spaces or special characters.',
              },
            })}
          />
        </div>
        {errors.slug && <Alert>{errors.slug.message}</Alert>}
      </div>
      <div>
        <label htmlFor='description'>Description (optional):</label>
      </div>
      <MuiButton
        buttonText='Create your link'
        buttonType='submit'
        isLoading={loading}
        loadingText='Creating your link...'
      />
    </form>
  )
}
