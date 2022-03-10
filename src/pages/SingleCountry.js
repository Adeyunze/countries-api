/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Loading from '../components/Loading';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
const url = 'https://restcountries.com/v2/alpha/';


const SingleCountry = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [country, setCountry] = React.useState(null);

  

  React.useEffect(() => {
    setLoading(true);
    async function getCountries() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if(data.status !== 404) {
          const {
            name,
            flag,
            alpha2Code,
            alpha3Code,
            borders,
            capital,
            languages,
            region,
            subregion,
            topLevelDomain,
            callingCodes,
            nativeName,
            population,
            currencies
          } = data;

          const newCountry = {
            name,
            flag,
            alpha2Code,
            alpha3Code,
            borders,
            capital,
            languages,
            region,
            subregion,
            topLevelDomain,
            callingCodes,
            nativeName,
            population,
            currencies
          }
          setCountry(newCountry);
        } else{
          setCountry(null)
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    }
    getCountries()
  }, [id])
  if(loading) {
    return <Loading/>
  }
  if(!country) {
    return <h2 className='flex items-center justify-center w-full h-[80vh] text-3xl font-bold'>No country to display</h2>
  }
  const {
    name,
    flag,
    alpha2Code,
    alpha3Code,
    borders = [],
    capital,
    languages,
    region,
    subregion,
    topLevelDomain,
    callingCodes,
    nativeName,
    population,
    currencies
  } = country;

  
  return (
    <section>
      <Link to="/">
      <div className='flex items-center justify-center bg-[#2b3945] w-fit mt-10 md:ml-20 mx-10 px-4 py-2 rounded'>
        <HiOutlineArrowNarrowLeft className='mr-3 text-2xl'/>
        <p>Back</p>
      </div>
      </Link>
      <div className="flex item-center justify-between md:flex-row flex-col md:ml-20 mx-10 mt-10">
        <div className="img-container md:w-[50%] w-full">
          <img src={flag} alt="flag-img" className='rounded' />
        </div>
        <div className="right-container md:mt-0 mt-12  flex flex-col justify-around md:mx-10 w-full">
          <h1 className='md:text-3xl text-2xl md:mb-0 mb-5 font-bold '>{name}</h1>
          <div className='flex md:flex-row flex-col'>
            <div>
              <p>
                <span className='font-bold'>Native Name: </span>  {nativeName}
              </p>
              <p>
                <span className='font-bold'>Population: </span>  {population.toLocaleString()}
              </p>
              <p>
                <span className='font-bold'>Region: </span>  {region}
              </p>
              <p>
                <span className='font-bold'>Sub Region: </span>  {subregion}
              </p>
              <p>
                <span className='font-bold'>Capital: </span>  {capital}
              </p>
            </div>
            <div className='md:ml-10 md:mt-0 mt-5'>
              <p>
                <span className='font-bold'>Top Level Domain: </span>  {topLevelDomain}
              </p>
              <p>
                <span className='font-bold'>Currencies: </span>  {currencies.map(country => country.name).join(', ')}
              </p>
              <p>
                <span className='font-bold'>Languages: </span>  {languages.map((language, index) => language.name).join(', ')}
              </p>
            </div>
          </div>
          <span className='font-bold md:mt-0 mt-5'>Border Countries: 
          <div className="btn-cont flex flex-wrap">
          {
            borders.length > 0 ? borders.map((border, index) => {
              return (
                <Link to={`/country/${border}`} key={index}>
                  <button className='bg-[#2b3945] px-5 py-2 rounded m-1'>
                    {border}
                  </button>
                </Link>
              )
            })  : <p>This country has no borders</p>
          }
          </div>
          </span>
        </div>
        <div>
          
        </div>
        
      </div>
      
    </section>
  )
}

export default SingleCountry