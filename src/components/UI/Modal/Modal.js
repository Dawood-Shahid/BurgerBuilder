import React from 'react';

import './Modal.css';
import Auxilary from '../../../HOC/Auxilary'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => {
    return (
        <Auxilary>
            <Backdrop state={props.state} clicked={props.clicked} />
            <div 
                className='Modal' 
                style={{ 
                    // visibility: props.state ? 'visible' : 'hidden',
                     transform: props.state ? 'translateY(0)' : 'translateY(-100vh)'
                }}
            >
                {props.children}
            </div>
        </Auxilary>
    );
}

export default modal;