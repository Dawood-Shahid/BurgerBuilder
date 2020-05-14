import React from 'react'

import './NavigationItem.css'

const navigationItem = (props) => {
    return (
        <li className='NavItem'>
           <a href={props.link} className={props.active ? 'Active' : null}>{props.children}</a> 
        </li>
    )
}

export default navigationItem