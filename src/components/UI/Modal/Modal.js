import React, { Component } from 'react';

import Auxilary from '../../../HOC/Auxilary';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.state !== this.props.state || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Auxilary>
                <Backdrop show={this.props.state} clicked={this.props.clicked} />
                <div
                    className='Modal'
                    style={{
                        // visibility: this.props.state ? 'visible' : 'hidden',
                        transform: this.props.state ? 'translateY(0)' : 'translateY(-100vh)'
                    }}
                >
                    {this.props.children}
                </div>
            </Auxilary>
        );
    }
}

export default Modal;