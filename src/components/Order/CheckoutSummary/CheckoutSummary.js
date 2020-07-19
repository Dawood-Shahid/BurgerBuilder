import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
// import Auxilary from '../../../HOC/Auxilary';
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className='CheckoutSummary'>
            <h3>We hope it tastes good...</h3>
            <div className='CheckoutBurger'>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType='Danger' clicked={props.checkoutCanled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;
