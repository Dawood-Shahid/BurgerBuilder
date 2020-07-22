import React from 'react';

import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavigationItems';
import HamburgerMenu from '../SideDrawer/HamburgerMenu/HamburgerMenu';
import './Toolbar.css';

const toolbar = (props) => {
    return (
        <header className='Toolbar'>
            <div className='ToolbarContainer'>
                <HamburgerMenu clicked={props.SideDrawerHandler} />
                <Logo />
                <nav>
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default toolbar