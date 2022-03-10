/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({id, name, population, region, capital, flag}) => {
  return (
      <article className='country bg-[#2b3945] md:w-[250px] w-[300px] rounded overflow-hidden'>
        <Link to={`/country/${id}`} className="cursor-pointer flex flex-col">
          <div className="img-container self-start">
            <img src={flag} alt={`${name} flag`} className="my-img h-[10rem] md:w-[250px] w-[300px]"/>
          </div>
          <div className="country-footer p-5">
            <h2 className="font-bold text-[16px] my-2">{name}</h2>
            <h3 className="text-[14px]">Population: <span className="font-extralight">{population}</span></h3>
            <h3 className="text-[14px]">Region: <span className="font-extralight">{region}</span></h3>
            <h3 className="text-[14px]">Capital: <span className="font-extralight">{capital}</span></h3>
          </div>
        </Link>
      </article>
    
  )
}

export default Country;