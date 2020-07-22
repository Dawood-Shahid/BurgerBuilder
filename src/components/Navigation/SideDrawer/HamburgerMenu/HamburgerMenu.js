import React from 'react';

import './HamburgerMenu.css';

const hamburgerMenu = (props) => {
    return (
        <div className='Hamburger' onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default hamburgerMenu;