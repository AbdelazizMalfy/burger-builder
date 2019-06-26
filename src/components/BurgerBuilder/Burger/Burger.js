import React from 'react';

import './Burger.css'
import BurgerIng from './BurgerIng/BurgerIng';

function Burger(props) {
    return (
        <div className="Burger">
            <BurgerIng type="bread-top" />
        </div>
    )
}

export default Burger;