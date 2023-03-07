import React from 'react'

import { useFormContext } from 'react-hook-form'

import AskQuestionTitleMemo from './AskQuestionTitleMemo'

interface AskQuestionTitleContainerProps {
  title: string
}

const AskQuestionTitleContainer: React.FC<AskQuestionTitleContainerProps> = ({
  title,
}: AskQuestionTitleContainerProps) => {
  const methods = useFormContext()

  return <AskQuestionTitleMemo methods={methods} title={title} />
}

export default AskQuestionTitleContainer
