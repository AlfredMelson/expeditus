import React from 'react'

import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

import type { AlertColor } from '@mui/material'

export type NotificationsContextActions = {
  showNotification: (text: string, typeColor: AlertColor) => void
}

const NotificationsContext = React.createContext({} as NotificationsContextActions)

interface INotificationsContext {
  children: React.ReactNode
}

const Notifications: React.FC<INotificationsContext> = ({ children }) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const [message, setMessage] = React.useState<string>('')
  const [alertColor, setAlertColor] = React.useState<AlertColor>('info')

  const showNotification = (text: string, color: AlertColor) => {
    setMessage(text)
    setAlertColor(color)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setAlertColor('info')
  }

  return (
    <NotificationsContext.Provider value={{ showNotification }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={alertColor}>
          {message}
        </Alert>
      </Snackbar>
      {children}
    </NotificationsContext.Provider>
  )
}

const useNotifications = (): NotificationsContextActions => {
  const context = React.useContext(NotificationsContext)

  if (!context) {
    throw new Error('useSnackBar must be used within an SnackBarProvider')
  }

  return context
}

export { Notifications, useNotifications }
