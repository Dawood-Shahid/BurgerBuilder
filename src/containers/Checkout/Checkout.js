import React, { Component } from 'react';

import Auxilary from '../../HOC/Auxilary';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            Salad: 1,
            Bacon: 1,
            Cheese: 1,
            Meat: 1
        }
    }

    checkoutCanledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <Auxilary>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutCanled={this.checkoutCanledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
            </Auxilary>
        )
    }
}

export default Checkout;