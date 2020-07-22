import React, { Component } from 'react';
import axios from 'axios';

import Button from '../../../components/UI/Button/Button';
import Modal from '../../../components/UI/Modal/Modal';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Auxilary from '../../../HOC/Auxilary';
import '../ContactData/ContactData.css';

class ContactData extends Component {
    state = {
        ingredients: null,
        totalPrice: null,
        contact: {
            name: '',
            email: '',
            contactNo: '',
            address: ''
        },
        loader: false,
        purchasing: false,
        error: false
    }

    cancelPurchaseHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            purchasing: true, 
            loader: true
        });
        
        // <Modal state={this.state.purchasing} clicked={this.cancelPurchaseHandler}>
        //     <Spinner />
        // </Modal>

        // console.log(this.props.ingredients);
        // console.log(this.props.price);
        const orderData = {
            ingredients: { ...this.props.ingredients },
            totalAmmount: this.props.price
        }
        axios.post('https://myburger-f9cc2.firebaseio.com/Orders', orderData)
            .then(response => {
                this.setState({
                    loader: false,
                    purchasing: false
                });
                // this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    error: true
                })
            });
    }

    render() {
        
        let form = (
            <form>
                <input className='InputField' type='text' name='name' placeholder='Name' />
                <input className='InputField' type='email' name='email' placeholder='Mail' />
                <input className='InputField' type='text' name='contact' placeholder='Contact' />
                <input className='InputField' type='text' name='address' placeholder='Address' />
                <Button btnType='Success' clicked ={this.orderHandler} >ORDER</Button>
            </form>    
        );
        
        if (this.state.loader) {
            let message = <Spinner />
         
            if (this.state.error) {
                message = <h2>Something Went Wrong...</h2>
            }
         
            form = (
                <Auxilary>
                    <form>
                        <input className='InputField' type='text' name='name' placeholder='Name' />
                        <input className='InputField' type='email' name='email' placeholder='Mail' />
                        <input className='InputField' type='text' name='contact' placeholder='Contact' />
                        <input className='InputField' type='text' name='address' placeholder='Address' />
                        <Button btnType='Success' clicked ={this.orderHandler} >ORDER</Button>
                    </form>
                    <Modal state={this.state.purchasing} clicked={this.cancelPurchaseHandler}>
                        {message}
                    </Modal>
                </Auxilary>
            )
        }

        return (
            <div className='ContactForm'>
                <h3>Enter Contact Data</h3>
                {form}
            </div>
        )
    }
}

export default ContactData;