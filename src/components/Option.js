/* eslint-disable no-unused-vars */
import React from 'react';
import { useGlobalContext } from '../context';

const Option = () => {
  const { setRegion } = useGlobalContext();
  const {optionValue} = React.useRef('')

  const optionPicked = (e) => {
    if(e.target.value === 'africa') {
      setRegion('africa')
    } else if(e.target.value === 'america') {
      setRegion('america')
    } else if(e.target.value === 'asia') {
      setRegion("asia")
    } else if(e.target.value === 'europe') {
      setRegion("europe")
    } else if(e.target.value === 'oceania') {
      setRegion("oceania")
    }
  }
  
  
  return (
    <select name="region" id="region" className='bg-[#2b3945] focus:outline-none rounded md:mt-0 mt-5' ref={optionValue} onChange={optionPicked}>
        <option value selected disabled hidden>Filter By Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
    </select>
  )
}

export default Option