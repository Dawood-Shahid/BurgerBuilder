import React from 'react'

import Logo from '../../Logo/Logo'
import NavItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxilary from '../../../HOC/Auxilary'
import './SideDrawer.css'

const sideDrawer = (props) => {
    let sideDrawerClasses = ['SideDrawer', 'Close'];

    if (props.Open) {
        sideDrawerClasses = ['SideDrawer', 'Open'];
    }

    return (
        <Auxilary>
            <Backdrop 
                show={props.Open}
                clicked={props.close} 
            />
            <div className={sideDrawerClasses.join(' ')}>
                <Logo />
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Auxilary>
    )
}

export default sideDrawer;