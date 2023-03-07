import { InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'

import { useSearch } from '@modules/navbar/context'

// function uxdelay(time: number | undefined) {
//   return new Promise(resolve => setTimeout(resolve, time))
// }

const InputBaseSx = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    backgroundColor: theme.palette.mode === 'dark' ? '#3C4043' : '#F1F3F4',
    padding: theme.spacing(1, 0),
  },
  [theme.breakpoints.only('md')]: {
    width: '380px',
  },
  [theme.breakpoints.only('lg')]: {
    width: '470px',
  },
  [theme.breakpoints.only('xl')]: {
    width: '530px',
  },
  '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & textarea:-webkit-autofill, & textarea:-webkit-autofill:hover, & textarea:-webkit-autofill:focus, & select:-webkit-autofill, & select:-webkit-autofill:hover, & select:-webkit-autofill:focus':
    {
      transition: 'background-color 600000s 0s, color 600000s 0s',
    },
}))

interface ISearchInputField {
  label: string
}

export default function SearchInputField({ label }: ISearchInputField) {
  // setAuth state in context
  const { searchText } = useSearch()

  // Error message display transition
  // const setSearchAlertError = useSetRecoilState(loginAlertErrorAtom)
  // const [searchAlertError, setSearchAlertError] = useState<boolean>(false)

  // const setSearchErrorMessage = useSetRecoilState(loginErrorMessageAtom)
  // const [searchErrorMessage, setSearchErrorMessage] = useState<string>('')

  // Search field state
  // const [searchFieldText, setSearchFieldText] = useState<string>('')
  // const [usernameHelperText, setSearchHelperText] = useState<string>('')

  // Search button states
  // handle disabled state
  // const [disabled, setDisabled] = useState(false)

  // handle submission state
  // const [submitting, setSubmitting] = useState(false)

  // handle successful submission state
  // const [successSubmit, setSuccessfulSubmit] = useState(false)

  // Handle search context
  // useEffect(() => {
  //   if (searchFieldText !== '') {
  //     setSearchText(searchFieldText)
  //   }
  //   if (searchFieldText === '') {
  //     setSearchText('')
  //   }
  // }, [searchFieldText])

  // Handle setting and updating error message and state
  // useEffect(() => {
  //   return () => {
  //     // empty any error message
  //     setSearchErrorMessage('')

  //     // reset alert when either the username or password state changes
  //     setSearchAlertError(false)
  //     setDisabled(false)
  //     setSearchHelperText('')
  //   }
  // }, [searchFieldText, setSearchErrorMessage, setSearchAlertError])

  // const handleSearchSubmission = (_event ) => {
  //   setSuccessfulSubmit(false)

  //   // disable search button when search field is empty
  //   if (!searchFieldText) {
  //     return setSearchHelperText('Please enter your username')
  //   }

  //   setSubmitting(true)
  //   try {
  //     // check if the component is mounted and set the response
  //     const response = true

  //     // if (response.status === 200) {
  //     //   // pass searchField
  //     //   setSearch({
  //     //     searchText: searchField,
  //     //   })

  //     //   // reset the username and password fields after 1 sec delay
  //     //   await uxdelay(1000)
  //     //   setDisabled(false)

  //     //   // quarter second delay
  //     //   await uxdelay(500)
  //     //   setSearchFieldText('')
  //     //   setSuccessfulSubmit(true)
  //     //   await uxdelay(500)
  //     //   // push to taxonomy page
  //     //   // navigate('/taxonomy')
  //     //   setSubmitting(false)
  //     // }
  //     // open error alert if there is a caught error
  //   } catch (error) {
  //     setSubmitting(false)
  //     setDisabled(true)
  //     uxdelay(300)
  //     setSearchAlertError(true)

  //     // handle no response from the server
  //     if (!error) {
  //       setSearchErrorMessage('No Server Response')

  //       // handle invalid syntax (400 Bad Request)
  //     } else if (error === 400) {
  //       setSearchErrorMessage('Bad Request')

  //       // handle unauthenticated (401 Unauthorized)
  //     } else if (error === 401) {
  //       setSearchErrorMessage('Unauthorized')

  //       // handle catch-all-other-errors
  //     } else {
  //       setSearchErrorMessage('Error')
  //     }
  //   }
  // }

  return (
    <InputBaseSx
      autoFocus
      autoComplete='on'
      id='searchField'
      type='text'
      value={searchText}
      inputProps={{ 'aria-label': 'search' }}
      placeholder={label}
    />
  )
}
