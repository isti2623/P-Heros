import React, { useState } from 'react';
import { useEffect } from 'react/';
import Cart from '../Cart/Cart';
import Team from '../Team/Team';
import './Heros.css'

const Heros = () => {
    const [heros, setHeros] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setHeros(data));
    }, []);
    const handleAddToBag = (hero) => {
        const newCart = [...cart, hero];
        setCart(newCart);
    }
    return (
        <div className="main">
            <div className="row">
                {
                    heros.map(hero => <Team
                        key={hero.key}
                        hero={hero}
                        handleAddToBag={handleAddToBag}
                    >
                    </Team>)
                }
            </div>
            <div className="cart">
                <Cart
                    cart={cart}>
                </Cart>
            </div>
        </div>
    );
};

export default Heros;