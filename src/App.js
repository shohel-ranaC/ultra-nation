//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
    })
    .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <h1>Country Loaded: {countries.length}</h1>
      <ul>
        {
           countries.map(country => <Country country={country} key={country.alpha3Code}></Country> )
        }
      </ul>
    </div>
  );
}

export default App;
