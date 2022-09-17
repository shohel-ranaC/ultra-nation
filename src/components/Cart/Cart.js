import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
   // console.log(props.cart);
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation += country.population;
    //     console.log(totalPopulation);     
    // }
    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0)
    const cartStyle = {textAlign: 'center'}
    return (
        <div>
            <h2 style={cartStyle}>this is added cart: {cart.length}</h2>
            <p style={cartStyle}>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;