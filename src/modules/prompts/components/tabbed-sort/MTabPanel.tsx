import React from 'react'

interface IMTabPanel {
  children: React.ReactNode
  index: number
  value: number
}

export default function MTabPanel({ children, value, index }: IMTabPanel) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`mobile-tabbed-sort-panel-${index}`}
      aria-labelledby={`mobile-tabbed-sort-${index}`}>
      {value === index && children}
    </div>
  )
}
