import React from 'react';

import './Order.css';

const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                quantity: props.ingredients[ingredientName]
            }
        )
    }

    const ingredientsOutput = ingredients.map( ig => {
        return (
        <span className={'ingredientsStyle'} key={ig.name}>{`${ig.name} [${ig.quantity}]`}</span>
        )
    })
    // console.log(ingredients)
    
    return (
        <div className={'Order'}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price: <strong>{props.price} Rs</strong></p>
        </div>
    )
}

export default order;