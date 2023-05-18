import { useState, useEffect } from "react";
import Country from "./components/Country";

const CountryContainer = () => {

    const [countries, setCountries] = useState([])
    // const [visitedCountries, setVisitedCountries] = useState([])


    const fetchCountries = async () => {

        const response = await fetch ("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();

        setCountries(jsonData)
    }

    useEffect(() => { 
        fetchCountries();
    }, []) // empty array means only calls back function once when app is initally loaded
     


    const countryComponents = countries.map((country) => {
        return <Country country={country}/>

    })

    return ( 
        {countryComponents}
     );
}
 
export default CountryContainer;