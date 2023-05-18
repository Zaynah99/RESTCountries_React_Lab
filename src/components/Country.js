const Country = ({index, country, visitCountry}) => {

    const visitedCountries = (index) => {
        const visitedCountriesIndex = visitedCountries.findIndex(
            (country) => country.name.common === country[index].name.common
        )
    }

    // const currencySymbol = Object.keys(Country.currencies)[0]



    return(
<>
        <input type ="checkbox" onClick={() => visitedCountries(index)}/>Country: {country.name.common}
        <p>Capital City:{country.capital}</p>
        <p>Continent: {country.region}</p>
        <p> Flag:{country.flag}</p>
    

        {/* <p>{country.currencies[currencySymbol.name]}</p> */}
        
        </>
    
    )
}

export default Country;