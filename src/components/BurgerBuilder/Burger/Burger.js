import React from 'react';

import './Burger.css'
import BurgerIng from './BurgerIng/BurgerIng';

function Burger(props) {
    let ingredientsArr = Object.keys(props.ingredients).map((igKey) => {
            return [...Array(props.ingredients[igKey] )].map((_,i)=>{
               return <BurgerIng key={igKey+i} type={igKey} />
            })
        })
        .reduce((arr,el) =>{
            return arr.concat(el)
        },[]);
    
    if ( ingredientsArr.length === 0){
        ingredientsArr = <p>Please Start Adding ingredients!</p>;
    }

    return (
        <div className="Burger">
            <BurgerIng type="bread-top" />
            {ingredientsArr}
            <BurgerIng type="bread-bottom" />
        </div>
    )
}

export default Burger;