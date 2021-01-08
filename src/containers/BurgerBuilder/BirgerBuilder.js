import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Auxilary from '../../HOC/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../../store/actions';


class BurgerBuilder extends Component {
    state = {
        // ingredients: {
        //     Salad: 0,
        //     Bacon: 0,
        //     Cheese: 0,
        //     Meat: 0
        // },
        // ingredients: null,  //fetching from firebase
        // ingredientsPrice: {
        //     Salad: 30,
        //     Bacon: 70,
        //     Cheese: 50,
        //     Meat: 100
        // },
        // ingredientsPrice: null,
        // totalPrice: 50,
        // totalPrice: null,  //fetching from firebase
        // purchaseable: false,
        purchasing: false,
        error: false
    };

    componentDidMount() {
        // axios.get('https://myburger-f9cc2.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         // console.log(response.data)
        //         this.setState({
        //             ingredients: response.data
        //         })

        //         axios.get('https://myburger-f9cc2.firebaseio.com/prices/totalPrice.json')
        //             .then(response => {
        //                 // console.log(response.data)
        //                 this.setState({
        //                     totalPrice: response.data
        //                 })

        //                 axios.get('https://myburger-f9cc2.firebaseio.com/prices/ingredientsPrice.json')
        //                     .then(response => {
        //                         // console.log(response.data)
        //                         this.setState({
        //                             ingredientsPrice: response.data
        //                         })
        //                     })
        //             });
        //     })
        //     .catch(error => (
        //         // console.log(error)
        //         this.setState({
        //             error: true
        //         })
        //     ));
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
        return sum > 0;
        // this.setState({
        //     purchaseable: purchaseable
        // });

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
        // this.props.history.push('/checkout');
        const queryParam = [];
        // const queryParamTest = [];

        for (let key in this.props.ingredients) {
            // queryParam.push(encodeURIComponent(key) + '=' + encodeURIComponent(this.props.ingredients[key]));
            //["Bacon=1", "Cheese=1", "Meat=1", "Salad=1"]
            // queryParamTest.push(`${key}=${this.state.ingredients[key]}`);
            //["Bacon=1", "Cheese=1", "Meat=1", "Salad=1"]
        }
        // console.log(queryParam);
        // console.log(queryParamTest);

        // queryParam.push(`price=` + this.props.totalPrice);
        // const queryString = queryParam.join('&');

        // console.log(this.props.history);

        this.props.history.push('/checkout');
    }

    // addIngretientsHandler = (type) => {
    //     const updatedState = { ...this.state.ingredients };
    //     const previousCount = this.state.ingredients[type];
    //     // console.log(previousCount);
    //     const currentCount = previousCount + 1;
    //     updatedState[type] = currentCount;
    //     // console.log(updatedState[type]);
    //     const initialPrice = this.state.totalPrice;
    //     const ingredientPrice = this.state.ingredientsPrice[type];
    //     const totalAmmount = initialPrice + ingredientPrice;
    //     this.setState({
    //         ingredients: updatedState,
    //         totalPrice: totalAmmount
    //     });
    //     this.updatePurchaseableState(updatedState);
    //     // console.log(updatedState);
    //     // console.log('Previoue', previousCount); 
    //     // console.log('item price', ingredientPrice); 
    //     // console.log(previousCount, currentCount);
    //     // console.log('total', totalAmmount);
    // }

    // removeIngretientsHandler = (type) => {
    //     const updatedState = { ...this.state.ingredients };
    //     const previousCount = this.state.ingredients[type];
    //     if (previousCount <= 0) {
    //         return;
    //     }
    //     const currentCount = previousCount - 1;
    //     updatedState[type] = currentCount;
    //     const initialPrice = this.state.totalPrice;
    //     const ingredientPrice = this.state.ingredientsPrice[type];
    //     const totalAmmount = initialPrice - ingredientPrice;
    //     this.setState({
    //         ingredients: updatedState,
    //         totalPrice: totalAmmount
    //     });
    //     this.updatePurchaseableState(updatedState);
    // }

    render() {
        const disableInfo = { ...this.props.ingredients }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0    // set true and false in disableInfo object's key value
        }

        let orderSummary = null;
        let spinner = <Spinner />

        if (this.state.error) {
            // console.log(`reeoe`);
            spinner = <h2>Something Went Wrong...</h2>
        }

        let burger = (
            <Modal state={true} clicked={this.cancelPurchaseHandler}>
                {spinner}
            </Modal>
        );

        if (this.props.ingredients) {
            burger = (
                <Auxilary>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls
                        addIngretients={this.props.addIngretientsHandler}
                        removeIngretients={this.props.removeIngretientsHandler}
                        disable={disableInfo}
                        price={this.props.totalPrice}
                        disableOrder={this.updatePurchaseableState(this.props.ingredients)}
                        clicked={this.updatePurchasingState}
                    />
                </Auxilary>
            );

            orderSummary = (
                <OrderSummary
                    ingredients={this.props.ingredients}
                    total={this.props.totalPrice}
                    cancel={this.cancelPurchaseHandler}
                    continue={this.continuePurchaseHandler}
                />
            )
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

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIngretientsHandler: (type) => dispatch({type: ADD_INGREDIENT, payload: type}),
        removeIngretientsHandler: (type) => dispatch({type: REMOVE_INGREDIENT, payload: type}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);