/* eslint-disable no-unused-vars */
import React from 'react';
import Country from './Country';
import Loading from './Loading';
import { useGlobalContext } from '../context';


const CountryList = () => {
  const { countries, loading, region } = useGlobalContext()

  if(loading) {
    return <Loading/>
  }
  if(countries.length < 1) {
    return (
      <h2 className="section-title">
        No country matched your search criteria
      </h2>
    )
  }
  if(region === 'africa') {
    return (
    <section className='section flex justify-between items-center ml-20 mt-20'>
      <div className="cocktails-center grid grid-cols-4 gap-y-14 w-screen">
        {countries.filter(country => country.region === "Africa").map(filteredCountry => {
        return <Country key={filteredCountry.id} {...filteredCountry}/>
        })}
      </div>
    </section>
  ) 
  }else if(region === 'america') {
    return (
    <section className='section flex justify-between items-center ml-20 mt-20'>
      <div className="cocktails-center grid grid-cols-4 gap-y-14 w-screen">
        {countries.filter(country => country.region === "Americas").map(filteredCountry => {
        return <Country key={filteredCountry.id} {...filteredCountry}/>
        })}
      </div>
    </section>
    )
  } else if(region === 'europe') {
    return (
    <section className='section flex justify-between items-center ml-20 mt-20'>
      <div className="cocktails-center grid grid-cols-4 gap-y-14 w-screen">
        {countries.filter(country => country.region === "Europe").map(filteredCountry => {
        return <Country key={filteredCountry.id} {...filteredCountry}/>
        })}
      </div>
    </section>
    )
  } else if(region === 'asia') {
    return (
    <section className='section flex justify-between items-center ml-20 mt-20'>
      <div className="cocktails-center grid grid-cols-4 gap-y-14 w-screen">
        {countries.filter(country => country.region === "Asia").map(filteredCountry => {
        return <Country key={filteredCountry.id} {...filteredCountry}/>
        })}
      </div>
    </section>
    )
  } else if(region === 'oceania') {
    return (
    <section className='section flex justify-between items-center ml-20 mt-20'>
      <div className="cocktails-center grid grid-cols-4 gap-y-14 w-screen">
        {countries.filter(country => country.region === "Oceania").map(filteredCountry => {
        return <Country key={filteredCountry.id} {...filteredCountry}/>
        })}
      </div>
    </section>
    )
  }

  // {
  //   const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
  //   console.log(regionNamesInEnglish.of(''));
  // }


  return (
    <section className='section flex justify-center items-center mx-20 mt-20'>
      <div className="cocktails-center grid lg:grid-cols-4 sm:grid-cols-2 gap-y-14 w-screen place-items-center">
        {countries.map((item) => {
          return <Country key={item.id} {...item}/>
        })} 
      </div>
    </section>
  )
}

export default CountryList