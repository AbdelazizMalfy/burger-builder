import React, { Component } from 'react';

import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import Modal from '../UI/Modal/Modal';
import OrderSummary from './OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../hoc/WithErrorHandler/WithErrorHandler';

import axios from  '../../axios-orders';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
         ingredients : {},
         totalPrice: 4,
         purchasing: false,
         loading: false
    }

    componentDidMount(){
        axios.get('https://burger-builder-ea7e3.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
            })
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

        const queryParams = [];
        for( let i in this.state.ingredients ) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join('&');

        queryParams.push('price=' + this.state.totalPrice);

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString

        })

    }
    
    render() {
        return (
            <div>
                { this.state.purchasing ? <Modal modalClosed={this.purchaseCancelHandler}>
                    {!this.state.loading ? <OrderSummary 
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients} /> : <Spinner/>}
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

export default WithErrorHandler(BurgerBuilder,axios);