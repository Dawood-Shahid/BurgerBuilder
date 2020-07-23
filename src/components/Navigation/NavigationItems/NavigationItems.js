import React from 'react';

import NavItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = () => {
    return (
        <ul className='NavItems'>
            <NavItem link={'/'} exact>Burger Builder</NavItem>
            <NavItem link={'/orders'}>Orders</NavItem>
        </ul>
    )
}

export default navigationItems