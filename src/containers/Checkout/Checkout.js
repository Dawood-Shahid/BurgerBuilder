import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Auxilary from '../../HOC/Auxilary';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {
            Salad: null,
            Bacon: null,
            Cheese: null,
            Meat: null
        },
        totalPrice: 0
    }

    componentDidMount() {
        const searchQuery = new URLSearchParams(this.props.location.search);
        // console.log(this.props.location.search); //return search string
        // console.log(searchQuery.toString()); //return search string without => ?
        const ingredients = {};
        let price = 0;
        for (let param of searchQuery.entries()) {
            // param combination of key and values
            // console.log(param);
            // param[0] for keys
            // param[1] for valuess

            if (param[0] === 'price'){
                price = +param[1]
            } else {
                ingredients[param[0]] = +param[1];
            }
            
            // console.log(`${param[0]} => ${param[1]}`);
            // console.log(`${ingredients[param[0]]} = ${+param[1]}`);
        }
        // console.log(price);
        // console.log(ingredients);
        this.setState({ ingredients: ingredients , totalPrice: price});

        // console.log(this.props.history);
        // console.log(`match path => ${this.props.match.path}`);
        // console.log(`location pathname => ${this.props.location.pathname}`);

    }

    checkoutCanledHandler = () => {
        this.props.history.push('/');
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
                <Route 
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => {
                        return (
                            <ContactData 
                                ingredients={this.state.ingredients} 
                                price={this.state.totalPrice} 
                                {...props}
                            />
                        );
                    }}
                />
            </Auxilary>
        )
    }
}

export default Checkout;