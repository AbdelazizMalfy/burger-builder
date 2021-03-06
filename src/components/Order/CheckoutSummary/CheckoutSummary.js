import React from 'react'

import Burger from '../../BurgerBuilder/Burger/Burger';
import Button from '../../UI/Button/Button';

import './CheckoutSummary.css';

function CheckoutSummary(props) {
    return (
        <div className="CheckoutSummary
        ">
            <h1>We Are Sure it will tastes well</h1>
            <div style={{width:'100%', margin: 'auto'}}>
                <Burger  ingredients={props.ingredients} />
            </div>
            <Button btnType='Danger' clicked={props.CheckoutCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.CheckoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default CheckoutSummary;