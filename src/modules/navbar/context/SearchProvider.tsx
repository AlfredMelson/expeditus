import React from 'react'

export type SearchContextActions = {
  searchText: string
  setSearchText: (searchText: string) => void
  dbResults: string
  setDbResults: (dbResults: string) => void
  searchInstruction: boolean
  setSearchInstruction: (searchInstruction: boolean) => void
  anchorEl: null | HTMLElement
  setAnchorEl: (anchorEl: null | HTMLElement) => void
}

export const SearchContext = React.createContext({} as SearchContextActions)

interface ISearchProvider {
  children: React.ReactNode
}

// zod

const SearchProvider = ({ children }: ISearchProvider) => {
  const [searchText, setSearchText] = React.useState<string>('')
  const [dbResults, setDbResults] = React.useState<string>('')
  const [searchInstruction, setSearchInstruction] = React.useState<boolean>(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  return (
    <SearchContext.Provider
      value={{
        searchText,
        setSearchText,
        dbResults,
        setDbResults,
        searchInstruction,
        setSearchInstruction,
        anchorEl,
        setAnchorEl,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

const useSearch = (): SearchContextActions => {
  const context = React.useContext(SearchContext)

  if (!context) {
    throw new Error('useSearch must be used within an SearchProvider')
  }

  return context
}

export { SearchProvider, useSearch }
