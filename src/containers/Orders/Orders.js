import React, { Component } from 'react';
import axios from 'axios';

import Order from '../../components/Order/Order';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import './Orders.css'

class Orders extends Component {
    state = {
        orders: [],
        loader: true,
        error: false

    }

    componentDidMount() {
        // console.log(this.state.orders)
        axios.get('https://myburger-f9cc2.firebaseio.com/Orders.json')
            .then(response => {
                const fetchOrders = [];
                for (let key in response.data) {
                    fetchOrders.push({
                        ...response.data[key],
                        id: key
                    })
                }
                // console.log(fetchOrders)
                this.setState({ orders: fetchOrders });
            })
            .catch(error => {
                this.setState({
                    error: true
                })
            })
    }

    cancelPurchaseHandler = () => {
        this.setState({
            loader: false
        })
    }



    render() {
        let spinner = <Spinner />

        if (this.state.error) {
            // console.log(`reeoe`);
            spinner = <h2>Something Went Wrong...</h2>
        }

        let orders = (
            <Modal state={this.state.loader} clicked={this.cancelPurchaseHandler} >
                {spinner}
            </Modal>
        )

        if (this.state.orders.length) {
            orders = (
                this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        price={order.totalAmmount}
                        ingredients={order.ingredients}
                    />
                ))
            )
        }

        return (
            <div className={'Orders'}>
                {orders} 
            </div>
        )
    }
}

export default Orders;