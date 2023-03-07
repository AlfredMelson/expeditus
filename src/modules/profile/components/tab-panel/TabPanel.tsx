import React from 'react'

interface ITabPanel {
  children: React.ReactNode
  index: number
  value: number
}

export default function TabPanel({ children, value, index }: ITabPanel) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabbed-sort-panel-${index}`}
      aria-labelledby={`tabbed-sort-${index}`}>
      {value === index && children}
    </div>
  )
}
