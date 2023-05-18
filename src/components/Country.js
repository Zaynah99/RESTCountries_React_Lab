const Country = ({Country}) => {

    const currencySymbol = Object.keys(country.currencies)[0]



    return(
        <>
        <h3>{countries.name.common}</h3>
        <p>{country.capital[0]}</p>
        <p>{country.currencies[currencySymbol.name]}</p>
        
        
        
        </>
    )
}

export default Country;