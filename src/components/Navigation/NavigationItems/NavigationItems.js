import React from 'react'

import NavItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'

const navigationItems = () => {
    return (
        <ul className='NavItems'>
            <NavItem link={'/'} active>Burger Builder</NavItem>
            <NavItem link={'/'}>Checkout</NavItem>
        </ul>
    )
}

export default navigationItems