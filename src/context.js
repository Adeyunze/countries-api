/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
const urlAllCountries = 'https://restcountries.com/v2/all';

const url = 'https://restcountries.com/v2/name/';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("an");
    const [countries, setCountries] = useState([]);
    const [allCountries, setAllCountries] = useState([]);
    const [region, setRegion] = useState('');
    // console.log(region)
    const fetchCountries = useCallback( async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            if(data[0]) {
                const newCountries = data.map((item) => {
                    const {
                        alpha2Code, 
                        name, 
                        population, 
                        region, 
                        capital,
                        flag,
                    } = item;
                    return {
                        id: alpha2Code,
                        name: name,
                        population: population,
                        region: region,
                        capital: capital,
                        flag: flag,
                    }
                })
                setCountries(newCountries);
            } else{
                setCountries([]);
                // setSearchTerm('a')
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }, [searchTerm])


    useEffect(() => {
        fetchCountries();
    }, [searchTerm, fetchCountries])

    useEffect(() => {
        const fetchAllCountriesData = async () => {
            try {
                const res = await fetch(urlAllCountries);

                const allCountries = await res.json();
                setAllCountries(allCountries);

                } catch(error) {
                    console.log(error)
            };
        };
        fetchAllCountriesData()
    }, []);

    return <AppContext.Provider 
        value={{
            loading,
            countries,
            setSearchTerm,
            setRegion,
            region,
            allCountries
        }}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};