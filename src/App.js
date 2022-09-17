//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => {setCountries(data)})
    .catch(error => console.log(error))
  }, [])
  const handleAddCountry = (country)=>{
  const newCart = [...cart, country];
  setCart(newCart);
  }
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Country Loaded: {countries.length}</h1>
      <h3 style={{textAlign:'center'}}>Added Country: {cart.length}</h3>
      <Cart cart={cart}></Cart>
      
      <ul>
        {
           countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country> )
        }
      </ul>
    </div>
  );
}

export default App;
