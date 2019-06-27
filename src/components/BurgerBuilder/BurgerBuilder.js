import React, { Component } from 'react';

import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import Modal from '../UI/Modal/Modal';
import OrderSummary from './OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
         ingredients : {
             salad: 0,
             bacon: 0,
             cheese:0,
             meat:0
         },
         totalPrice: 4,
         purchasing: false
    }

    

    addIngHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1 ; 
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice:newPrice,
            ingredients: updatedIngredients
        })

    }

    removeInghandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0 ){
            return;
        }
        const updatedCount = oldCount - 1 ; 
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceSub = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSub;

        this.setState({
            totalPrice:newPrice,
            ingredients: updatedIngredients
        })
    }
    
    purchaseHandler = () => {
        this.setState({ purchasing:true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert('You Continue');
    }
    
    render() {
        return (
            <div>
                { this.state.purchasing ? <Modal modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    ingredients={this.state.ingredients} />
                </Modal> : null}
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngHandler}
                    ingredientRemoved={this.removeInghandler}
                    price = {this.state.totalPrice}
                    ordered={this.purchaseHandler} />
                

                
            </div>
        )
    }
}

export default BurgerBuilder;