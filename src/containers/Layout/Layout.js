import React, { Component } from 'react';

import Auxilary from '../../HOC/Auxilary';
import './Layout.css';
import Header from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrower: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrower: false });
    }

    sideDrawerOpenHandler = () => {
        this.setState((pervState) => {
            return {showSideDrower: !pervState.showSideDrower}
        });
    }

    render() {
        return (
            <Auxilary>
                <Header 
                    show={this.state.showSideDrower} 
                    SideDrawerHandler={this.sideDrawerOpenHandler}    
                />
                <SideDrawer
                    Open={this.state.showSideDrower}
                    close={this.sideDrawerClosedHandler}
                />
                <main className='Content'>
                    {this.props.children}
                </main>
            </Auxilary>
        );
    }
};

export default Layout;