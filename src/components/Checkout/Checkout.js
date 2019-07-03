import React, { Component } from 'react'

import CheckoutSummary from '../Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state={
        ingredients: {
            salad:1,
            meat:1,
            cheese:1,
            bacon:1
        }
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
            </div>
        )
    }
}

export default Checkout;