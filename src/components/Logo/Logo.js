import React from 'react';

import Logo from '../../assets/Images/Logo.png';
import './Logo.css';

const logo = () => {
    return (
        <div className='Logo'>
            <img src={Logo} alt='The Big Burger' className='LogoImg' />
        </div>
    )
}

export default logo