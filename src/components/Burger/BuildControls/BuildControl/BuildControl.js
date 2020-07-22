import React from 'react';

import './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{props.Lable}</div>
            <button className='Btn More' onClick={props.add}>More</button>
            <button className='Btn Less' onClick={props.remove} disabled={props.disable}>Less</button>
        </div>
    )
};

export default buildControl;