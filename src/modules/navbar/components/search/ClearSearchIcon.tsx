import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

import { useSearch } from '@modules/navbar/context'

export default function ClearSearchIcon() {
  const { searchText, setSearchText } = useSearch()

  return (
    <>
      {searchText === '' ? (
        <IconButton disabled>
          <CloseIcon sx={{ mr: 1 }} />
        </IconButton>
      ) : (
        <Tooltip title='Clear search'>
          <IconButton aria-label='clear search' onClick={() => setSearchText('')}>
            <CloseIcon sx={{ mx: 1 }} />
          </IconButton>
        </Tooltip>
      )}
    </>
  )
}
