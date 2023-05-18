const Country = ({country}) => {

    // const currencySymbol = Object.keys(Country.currencies)[0]



    return(
        <>
        <h3>{country.name.common}</h3>
        <p>{country.capital}</p>
        {/* <p>{country.currencies[currencySymbol.name]}</p> */}
        
        {/* on click event moves mountry to visited <ul> */}
        
        
        </>
    )
}

export default Country;