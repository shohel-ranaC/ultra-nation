import React from 'react';

const Country = (props) => {
   const {name, population, region, flag} = props.country;
   const flagStyle = { height: '40px'}
    return (
        <div>
            <h3>Country Name: {name} </h3>
            <img style={flagStyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;