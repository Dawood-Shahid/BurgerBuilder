import React, { Component } from 'react';

import Auxilary from '../../HOC/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';


class BurgerBuilder extends Component {
    state = {
        // ingredients: {
        //     Salad: 0,
        //     Bacon: 0,
        //     Cheese: 0,
        //     Meat: 0
        // },
        ingredients: null,  //fetching from firebase
        // ingredientsPrice: {
        //     Salad: 30,
        //     Bacon: 70,
        //     Cheese: 50,
        //     Meat: 100
        // },
        ingredientsPrice: null,
        // totalPrice: 50,
        totalPrice: null,  //fetching from firebase
        purchaseable: false,
        purchasing: false,
        loader: false
    };

    componentDidMount () {
        axios.get('https://myburger-f9cc2.firebaseio.com/ingredients.json')
        .then( response => {
            // console.log(response.data)
            this.setState({
                ingredients: response.data
            })

            axios.get('https://myburger-f9cc2.firebaseio.com/prices/totalPrice.json')
            .then( response => {
                // console.log(response.data)
                this.setState({
                    totalPrice: response.data
                })
            
                axios.get('https://myburger-f9cc2.firebaseio.com/prices/ingredientsPrice.json')
                .then( response => {
                    // console.log(response.data)
                    this.setState({
                        ingredientsPrice: response.data
                    })
                });
            });
        });
    }

    updatePurchaseableState(ingredients) {
        const ingredientsObj = ingredients;
        const ingredientsArray = Object.keys(ingredientsObj);
        const ingredientsValues = ingredientsArray.map(key => {
            return ingredientsObj[key];
        });
        const sum = ingredientsValues.reduce((acc, cur) => {
            return acc + cur;
        }, 0);
        const purchaseable = sum > 0;
        this.setState({
            purchaseable: purchaseable
        });

        // console.log(ingredientsArray);     
        // console.log(ingredientsValues);     
        // console.log(sum);     
        // console.log(purchaseable);
    }

    updatePurchasingState = () => {
        this.setState({
            purchasing: true
        })
        // console.log("clicked " + this.state.purchasing);
    }

    cancelPurchaseHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    continuePurchaseHandler = () => {
        // alert("Continue")
        this.setState({ loader: true })
        const orderData = {
            ingredients: {...this.state.ingredients},
            totalAmmount: this.state.totalPrice
        }
        axios.post('https://myburger-f9cc2.firebaseio.com/Orders.json', orderData)
            .then(response => {
                this.setState({ 
                    loader: false,
                    purchasing: false
                })
            })
            .catch(error => {
                this.setState({ 
                    loader: false,
                    purchasing: false
                })
            });
    }

    addIngretientsHandler = (type) => {
        const updatedState = { ...this.state.ingredients };
        const previousCount = this.state.ingredients[type];
        const currentCount = previousCount + 1;
        updatedState[type] = currentCount;
        const initialPrice = this.state.totalPrice;
        const ingredientPrice = this.state.ingredientsPrice[type];
        const totalAmmount = initialPrice + ingredientPrice;
        this.setState({
            ingredients: updatedState,
            totalPrice: totalAmmount
        });
        this.updatePurchaseableState(updatedState);
        // console.log(updatedState);
        // console.log('Previoue', previousCount); 
        // console.log('item price', ingredientPrice); 
        // console.log(previousCount, currentCount);
        // console.log('total', totalAmmount);
    }

    removeIngretientsHandler = (type) => {
        const updatedState = { ...this.state.ingredients };
        const previousCount = this.state.ingredients[type];
        if (previousCount <= 0) {
            return;
        }
        const currentCount = previousCount - 1;
        updatedState[type] = currentCount;
        const initialPrice = this.state.totalPrice;
        const ingredientPrice = this.state.ingredientsPrice[type];
        const totalAmmount = initialPrice - ingredientPrice;
        this.setState({
            ingredients: updatedState,
            totalPrice: totalAmmount
        });
        this.updatePurchaseableState(updatedState);
    }

    render() {
        const disableInfo = { ...this.state.ingredients }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0    // set true and false in disableInfo object's key value
        }

        let orderSummary = null;
        let burger = (
            <Modal state={true} clicked={this.cancelPurchaseHandler}>
                <Spinner />
            </Modal>
        );

        if (this.state.ingredients) {
            burger = (
                <Auxilary>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        addIngretients={this.addIngretientsHandler}
                        removeIngretients={this.removeIngretientsHandler}
                        disable={disableInfo}
                        price={this.state.totalPrice}
                        disableOrder={this.state.purchaseable}
                        clicked={this.updatePurchasingState}
                    />
                </Auxilary>
            );

            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    total={this.state.totalPrice}
                    cancel={this.cancelPurchaseHandler}
                    continue={this.continuePurchaseHandler}
                />
            )
        }

        if (this.state.loader) {
            orderSummary = <Spinner />
        }

        return (
            <Auxilary>
                <Modal state={this.state.purchasing} clicked={this.cancelPurchaseHandler}>
                    {orderSummary}
                </Modal>
                    {burger}
            </Auxilary>
        );
    };
};

export default BurgerBuilder;