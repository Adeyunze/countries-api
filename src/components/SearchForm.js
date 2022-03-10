/* eslint-disable no-unused-vars */
import React from 'react';
import { useGlobalContext } from '../context';
import Option from './Option'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCountry = () => {
    setSearchTerm(searchValue.current.value)
  }
  if(searchValue.current.value < 1) {
    setSearchTerm('an')
  }
  return (
    <header className='m-auto md:mx-20 mx-10 mt-20 flex md:flex-row flex-col  justify-between md:items-center'>
      <input type="text" name="search" placeholder='Search for a country' className='search-input focus:outline-none md:w-auto md:w-72' ref={searchValue} onChange={searchCountry}/>
      <Option className="md:mt-0 mt-5"/>
    </header>
  )
}

export default SearchForm