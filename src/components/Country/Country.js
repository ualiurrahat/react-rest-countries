import React from 'react';
import './Country.css'

const Country = (props) => {
    // destructuring the object 'country'
    const {name,population,area,region} = props.country;
    return (
        <div className='country'>
            <h2>Country:{name.common}</h2>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;