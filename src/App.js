import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  // 5 steps to load data:
  // 1. declaring state to save loaded data
  const [countries,setCountries] = useState([]);
  // 2. writing useEffect()
  useEffect( () =>{
    // 3. writing fetch() inside useEffect() & setting loaded data
   fetch("https://restcountries.com/v3.1/all")
   .then(res =>res.json())
   .then(data =>setCountries(data))
  },[])
  return (
    <div>
      <h1>Visiting Every Countrie of The Whold World!!!</h1>
      <h3>Total Countries: {countries.length}</h3>
     {
      countries.map(country => <Country name = {country.name.common} population = {country.population}></Country>)
     }
    </div>

  );


}

function Country(props)
{
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Population:{props.population}</p>
    </div>
  );
}
export default App;
