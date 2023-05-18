import { useState, useEffect } from "react";

const CountryContainer = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])


    const fetchCountries = async () => {

        const response = await fetch ("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();

        setCountries(jsonData)
    }

    useEffect(() => { 
        fetchCountries();
    }, []) // empty array means only calls back function once when app is initally loaded
     

    return ( 
        <h1>HELLO FROM COUNTRY CONTAINER</h1>
     );
}
 
export default CountryContainer;