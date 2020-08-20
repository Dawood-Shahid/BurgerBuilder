import React from 'react'

import Auxilary from '../../../HOC/Auxilary'
import './Input.css'

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className='InputField'
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break

        case ('textarea'):
            inputElement = <textarea
                className='InputField'
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break

        case ('select'):
            inputElement = <select
                className='InputField'
                // value={props.value}
                onChange={props.changed}
            >
                {props.elementConfig.options.map( option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>   
            break

        default:
            inputElement = <input
                className='InputField'
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
    }
    
    return (
        <Auxilary>
            <label className='Label' >{props.label}</label>
            {inputElement}
        </Auxilary>
    )
}

export default input;