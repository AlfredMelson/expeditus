import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import { HelpMenuAuth } from '@modules/navbar/components/help-menu'
import {
  ClearSearchIcon,
  SearchInputField,
  SearchInstruction,
  SubmitSearchIcon,
} from '@modules/navbar/components/search'
import { SearchProvider } from '@modules/navbar/context'

import type { StackProps } from '@mui/material/Stack'

const SearchStackSx = styled((props: StackProps) => (
  <Stack direction='row' justifyContent='space-between' alignItems='center' {...props} />
))(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.mode === 'dark' ? '#3C4043' : '#F1F3F4',
}))

const SearchSectionAuth = () => {
  return (
    <SearchProvider>
      <Stack direction='row'>
        <SearchInstruction>
          <SearchStackSx>
            <SubmitSearchIcon />
            <SearchInputField label='Search for species, topics & gardeners' />
            <ClearSearchIcon />
          </SearchStackSx>
        </SearchInstruction>
        <HelpMenuAuth />
      </Stack>
    </SearchProvider>
  )
}

export default SearchSectionAuth
