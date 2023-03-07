import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

interface IMTagCardClose {
  handleClose?: () => void
}

export default function MTagCardClose({ handleClose }: IMTagCardClose) {
  return (
    <Tooltip title='Close'>
      <IconButton onClick={handleClose}>
        <CloseIcon fontSize='large' />
      </IconButton>
    </Tooltip>
  )
}
