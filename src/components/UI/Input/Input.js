import React from 'react'

import Auxilary from '../../../HOC/Auxilary'
import './Input.css'

const input = (props) => {
    let inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className='InputField' {...props} />
            break
        case ('textarea'):
            inputElement = <textarea className='InputField' {...props} />
            break
        default:
            inputElement = <input className='InputField' {...props} />
    }
    
    return (
        <Auxilary>
            <label className='Label' >{props.label}</label>
            {inputElement}
        </Auxilary>
    )
}

export default input;