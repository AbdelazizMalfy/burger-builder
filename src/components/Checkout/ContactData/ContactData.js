import React, { Component } from 'react'

import Button from '../../UI/Button/Button';


import axios from  '../../../axios-orders';

import './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street:'',
            postalCode:''
        },
        loading: false
    }

    orderHandler = (event) =>{
        event.preventDefault();
        console.log(this.props)
        this.setState({loading:true})
        const order = {
            ingredients:this.props.ingredients,
            price:this.props.price,
            customer: {
                name: "Abdelaziz Mohamed Elalfy",
                address: {
                    street: "Berlin St.",
                    zipCode: "42323",
                    country: "Germany"
                },
                email: "abdelazizMalfy@gmail.com"
            },
            deliveryMethod: "fastest"
        }
        axios.post('/orders.json', order)
            .then( response => {
                this.setState({loading:false })
            })
            .catch( error => {
                this.setState({loading:false})
            });
        

    }

    render() {
        return (
            <div className="ContactData">
                <h4>Enter Your Contact Data</h4>
                <form>
                    <input className="Input" type="text" name="name" placeholder="Your Name" />
                    <input className="Input" type="text" name="email" placeholder="Your Email" />
                    <input className="Input" type="text" name="street" placeholder="Street" />
                    <input className="Input" type="text" name="postal" placeholder="Postal code" />
                    <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>

                </form> 
            </div>
        )
    }
}

export default ContactData;