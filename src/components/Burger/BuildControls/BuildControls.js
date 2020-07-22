import React from 'react'
import BuildControl from './BuildControl/BuildControl';

import './BuildControls.css';

const controls = [
    { lable: 'Salad', type: 'Salad'},
    { lable: 'Bacon', type: 'Bacon'},
    { lable: 'Cheese', type: 'Cheese'},
    { lable: 'Meat', type: 'Meat'}
];

const buildControls = (props) => {
    return (
        <div className='BuildControls'>
            <p>Total Price: <strong>{props.price} Rs</strong></p>
            {controls.map( el => (
                <BuildControl 
                    key={el.lable} 
                    Lable={el.lable} 
                    add={() => props.addIngretients(el.type)}
                    remove={() => props.removeIngretients(el.type)}
                    disable={props.disable[el.type]}
                /> 
            ))}
            <button className='OrderButton' disabled={!props.disableOrder} onClick={props.clicked}>Order Now</button>
        </div>
    )
}

export default buildControls;