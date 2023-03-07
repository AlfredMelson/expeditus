import React from 'react'

export default function useFirstToRender(): boolean {
  const isFirst = React.useRef(true)

  if (isFirst.current) {
    isFirst.current = false

    return true
  }

  return isFirst.current
}
