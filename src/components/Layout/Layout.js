import React from 'react';

import Auxilary from '../../HOC/Auxilary';
import './Layout.css';
import Header from '../Navigation/Toolbar/Toolbar'

const layout = (props) => {
    return (
        <Auxilary>
            <Header />
            <main className='Content'>
                {props.children}
            </main>
        </Auxilary>
    );
};

export default layout;