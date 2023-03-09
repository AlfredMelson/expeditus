import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'

import { AskPromptBody } from '@modules/ask/components/body'
import { AskQuestionHeader } from '@modules/ask/components/header'
import { AskQuestionLocation } from '@modules/ask/components/location'
import { TagsContainer } from '@modules/ask/components/tags'
import { AskQuestionTitle } from '@modules/ask/components/title'

// import { DevTool } from '@hookform/devtools'

export default function AskPromptFormContainer() {
  // const router = useRouter()

  // const { mutate } = trpc.question.addQuestion.useMutation({
  //   onSuccess(question) {
  //     if (question) {
  //       router.push(`/qn/${question.permalink}`)
  //     }
  //   },
  // })

  // const { methods, control, handleSubmit } = useForm({
  //   mode: 'onSubmit',
  //   reValidateMode: 'onChange',
  //   defaultValues: {
  //     title: '',
  //     body: '',
  //     tags: [''],
  //   },
  //   resolver: undefined,
  //   context: undefined,
  //   criteriaMode: 'firstError',
  //   shouldFocusError: true,
  //   shouldUnregister: false,
  //   delayError: undefined,
  // })

  const QuestionModel = z.object({
    title: z.string(),
    zone: z.string(),
    body: z.string(),
    permalink: z.string(),
    published: z.boolean(),
    tagIDs: z.string().array(),
    authorID: z.string(),
  })

  // infer the type from the schema
  // type IQuestionModel = z.infer<typeof QuestionModel>

  // const { control } = useForm({ mode: 'onChange' })
  const methods = useForm({ resolver: zodResolver(QuestionModel) })

  console.log('methods', methods)
  const { register } = methods
  console.log('register', register('fullname'))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.log(data)

  // const onSubmit = async () => {
  //   const title = methods.getValues('title')
  //   const zone = methods.getValues('zone')
  //   const body = methods.getValues('body')
  //   const tags = methods.getValues('tags')

  //   console.log(title, zone, body, tags)

  //   mutate({
  //     title: title,
  //     zone: zone,
  //     body: body,
  //     tags: tags,
  //   })
  // }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <AskQuestionHeader />
        <AskQuestionTitle />
        <AskQuestionLocation />
        <AskPromptBody />
        <TagsContainer />
        <input type='submit' />
      </form>
    </FormProvider>
  )
}
