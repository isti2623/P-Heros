import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    const { cart } = props;

    /*   const totalReducer = (previous, heros) => previous + heros.salary;
      const total = cart.reduce(totalReducer, 0); */
    let totalQuantity = 0;
    let total = 0;
    for (const heros of cart) {
        if (!heros.quantity) {
            heros.quantity = 1;
        }
        total = total + heros.salary * heros.quantity;
        totalQuantity = totalQuantity + heros.quantity;
    }
    const names = cart.map((cart) =>
        <p>{cart.name}</p>
    );
    return (
        <div className="mt-5 bg-danger p-3 shadow">
            <h3 className="text-white fw-bold text-center">Order Summary</h3>
            <h5 className="text-white text-center">Items Ordered:{totalQuantity} </h5>
            <br />
            <p className="text-white text-center fw-bold">Total: {total.toFixed(2)}</p>
            <p className="text-white text-center fw-bold">Order List:{names}</p>

        </div>
    );
};

export default Cart;