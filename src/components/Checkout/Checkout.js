import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ContactData from './ContactData/ContactData';

import CheckoutSummary from '../Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state= {
        ingredients: {},
        totalPrice: 0
        }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()){
            if(param[0] ==='price') {
                price = param[1];                
            }else {
                ingredients[param[0]] =  +param[1];
            }
        }
        this.setState({
            ingredients,
            totalPrice: price
        })
    }

    CheckoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    CheckoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} CheckoutCancelled={this.CheckoutCancelledHandler} CheckoutContinued={this.CheckoutContinuedHandler} />
                <Route path={this.props.match.path + '/contact-data'} render={() => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} /> )} />
            </div>
        )
    }
}
export default Checkout;