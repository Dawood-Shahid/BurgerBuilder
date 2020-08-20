import React, { Component } from 'react';
import axios from 'axios';

import Button from '../../../components/UI/Button/Button';
import Modal from '../../../components/UI/Modal/Modal';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Auxilary from '../../../HOC/Auxilary';
import Input from '../../../components/UI/Input/Input'
import '../ContactData/ContactData.css';

class ContactData extends Component {
    state = {
        ingredients: null,
        totalPrice: null,
        customerDetails: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            contactNo: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Contact Number'
                },
                value: ''
            },
            address: {
                elementType: 'textarea',
                elementConfig: {
                    // type: 'text',
                    placeholder: 'Address'
                },
                value: ''
            },
            deliceryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest'
            },
        },
        loader: false,
        purchasing: false,
        error: false
    }

    cancelPurchaseHandler = () => {
        this.setState({
            purchasing: false,
            loader: false
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
        const customerData = {}
        for (let key in this.state.customerDetails) {
            customerData[key] = this.state.customerDetails[key].value
        }
        // console.log(customerData)
        const orderData = {
            ingredients: { ...this.props.ingredients },
            customerDetails: customerData,
            totalAmmount: this.props.price
        }
        // console.log(orderData)
        axios.post('https://myburger-f9cc2.firebaseio.com/Orders.json', orderData)
            .then(response => {
                this.setState({
                    loader: false,
                    purchasing: false
                });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    error: true
                })
            });
    }

    inputChangedHandler = (event, inputIdentifier) => {
        // console.log(event.target.value);
        const updatedCustomerDetails = {...this.state.customerDetails}
        const updatedFormField = {...updatedCustomerDetails[inputIdentifier]}
        updatedFormField.value = event.target.value
        updatedCustomerDetails[inputIdentifier] = updatedFormField
        this.setState({customerDetails: updatedCustomerDetails})
    }

    render() {

        let loader;

        if (this.state.loader) {
            let message = <Spinner />

            if (this.state.error) {
                message = <h2>Something Went Wrong...</h2>
            }

            loader = (
                <Auxilary>
                    <Modal state={this.state.purchasing} clicked={this.cancelPurchaseHandler}>
                        {message}
                    </Modal>
                </Auxilary>
            )
        }

        let customerDetailsArray = [];
        for (let key in this.state.customerDetails) {
            customerDetailsArray.push({
                id: key,
                configuration: this.state.customerDetails[key]
            })
        }

        return (
            <div className='ContactForm'>
                {loader}
                <h3>Enter Contact Data</h3>
                <form onSubmit={this.orderHandler}>
                    {customerDetailsArray.map( details => (
                        <Input 
                            key={details.id}
                            elementType={details.configuration.elementType}
                            elementConfig={details.configuration.elementConfig}
                            value={details.configuration.value}
                            changed={(event) => this.inputChangedHandler(event, details.id)}
                        />
                    ))}
                    <Button btnType='Success'>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;