import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

export default function SubmitSearchIcon() {
  return (
    <Tooltip title='Search'>
      <IconButton aria-label='search'>
        <SearchIcon fontSize='medium' sx={{ mx: 1 }} />
      </IconButton>
    </Tooltip>
  )
}
