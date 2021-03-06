import React from 'react';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import './Burger.css';

const burger = (props) => {
    // console.log(props.ingredients);
    const ingredientArray = Object.keys(props.ingredients);    // it returns an array consists of given object keys
    // console.log(ingredientArray);

    let ingredientList = ingredientArray.map(key => {
        // console.log([key]);
        // [key]    // this return an individual array of each object's keys
        // props.ingredients[key]  // this return the value of each object's keys (for access the each values of an object)
        // console.log(props.ingredients[key]);
        return (
            [...Array(props.ingredients[key])]  // this create an individual arrays of keys based on their values 
            // [[individual arrays of keys with multiple Indexes],[...],[...],[...]]
        )
        .map((_, i) => {
            // return key  // this fill the multiple indexes of object's keys for the object's keys 
            return <BurgerIngredients key={key + i} type={key} />
        })
    });

    // console.log(ingredientList);

    ingredientList = ingredientList.reduce((acc, cur) => {
        // console.log(acc.concat(cur));
        return acc.concat(cur);
    }, []);
    // console.log(ingredientList);

    if (ingredientList.length === 0) {
        ingredientList = <h3 className='Instruction'>Please start adding ingredients!</h3>
    }

    return (
        <div className='Burger'>
            <BurgerIngredients type='BurgerTop' />
            {ingredientList}
            <BurgerIngredients type='BurgerBottom' />
        </div>
    )
}

export default burger;
