import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    // 5 steps to load data
    // 1. declare state to save loaded data
    const [countries,setCountries] = useState([]);
    // 2. write useEffect()
    useEffect( () =>{
        // 3. write fetch() inside useEffect() & set loaded data
        fetch("https://restcountries.com/v3.1/all")
        .then(res =>res.json())
        // 4. connect state with data
        .then(data => setCountries(data))
    } , []);
    return (
        <div>
            <h1>Welcome To Every Country in The World!</h1>
            <p>Total Countries:{countries.length}</p>
            {
                countries.map(country => console.log(country))
            }
            {
                countries.map(country => <Country
                     name = {country.name.common}
                     population = {country.population}
                     area = {country.area}
                     ></Country>)
            }
        </div>
    );
};

export default Countries;