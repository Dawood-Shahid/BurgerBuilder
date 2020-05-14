import React from 'react'

import Auxilary from '../../../HOC/Auxilary'
import Button from '../../UI/Button/Button'
import './OrderSummary.css'

const orderSummary = (props) => {
    let ingredientSummary = Object.keys(props.ingredients);
    ingredientSummary = ingredientSummary.map( key => {
        return (
            <li key={key}>{key}: {props.ingredients[key]}</li>
        );
    });

    return (
        <Auxilary>
            <h3 className='OrderSummaryItems'>Your Order</h3>
            <p className='OrderSummaryItems'>A delicious burger with the following ingredients:</p>
            <ul className='OrderSummaryItems'>
                {ingredientSummary}
            </ul>
            <p className='OrderSummaryItems'><strong>Total Price: {props.total} Rs</strong></p>
            <p className='OrderSummaryItems'>Continue to  Checkout?</p>
            <Button btnType='Danger' clicked={props.cancel}>Cancel</Button>
            <Button btnType='Success' clicked={props.continue}>Continue</Button>
        </Auxilary>
    )
};

export default orderSummary;