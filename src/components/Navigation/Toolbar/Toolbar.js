import React from 'react'

import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => {
    return (
        <header className='Toolbar'>
            <div className='ToolbarContainer'>
                <div>Menu</div>
                <Logo />
                <nav>
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default toolbar