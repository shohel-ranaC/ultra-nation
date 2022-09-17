import React from 'react';

const Country = (props) => {
   const {name, population, region, flag} = props.country;
   //console.log(props.country);
   const flagStyle = { height: '40px'}
   const countryStyle = {textAlign: 'center', border: '1px solid gray', margin: '10px', padding: '10px'} 
   const handleAddCountry = props.handleAddCountry;
    return (
        <div style = {countryStyle}>
            <h3>Country Name: {name} </h3>
            <img style={flagStyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() =>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;