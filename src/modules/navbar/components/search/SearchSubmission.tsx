import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import { CheckedProgressSx } from './CheckedProgressSx'
import { CircularProgressSx } from './CircularProgressSx'
import { SubmitButtonSx } from './SubmitButtonSx'

interface ISearchSubmission {
  onClick: () => void
  disabled: boolean
  submitting: boolean
  successSubmit: boolean
}

const SearchSubmission = (props: ISearchSubmission) => {
  const { onClick, disabled, submitting, successSubmit } = props

  // const [searchHover, setSearchHover] = React.useState(false)

  return (
    <Stack direction='row' justifyContent='center' alignItems='center'>
      <Box
        sx={{
          position: 'relative',
          margin: { xs: '10px 0 0', sm: '12px 0 0', md: '12px 0 0' },
          p: 0,
        }}
      >
        <SubmitButtonSx
          disabled={disabled}
          onClick={onClick}

          // onMouseEnter={() => setSearchHover(true)}
          // onMouseLeave={() => setSearchHover(false)}
        >
          {!submitting && 'Search'}
        </SubmitButtonSx>
        {submitting && (!successSubmit ? <CircularProgressSx /> : <CheckedProgressSx />)}
      </Box>
    </Stack>
  )
}

export default SearchSubmission
