/* eslint-disable no-unused-vars */
import React from 'react';
import SearchForm from '../components/SearchForm';
import CountryList from '../components/CountryList'
import { useGlobalContext } from '../context';
import Loading from '../components/Loading';

const Home = () => {
  return (
    <main className='head'>
      <SearchForm/>
      <CountryList/>

    </main>
  )
}

export default Home;