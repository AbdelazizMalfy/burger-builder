import React, { Component } from 'react'

 import Button from '../../UI/Button/Button';

import Input from '../../UI/Input/Input';
import axios from  '../../../axios-orders';

import './ContactData.css';

class ContactData extends Component {
    state = {
        orderFrom: {
            customer: {
                name:{
                    elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:'Your Name'
                    },
                    value: ''
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type:'text',
                        placeholder: 'Street'
                    },
                    value: ''
                },
                zipCode:{
                    elementType: 'input',
                    elementConfig: {
                        type:'text',
                        placeholder: 'ZIP Code'
                    },
                    value: ''
                },
                country:{
                    elementType: 'input',
                    elementConfig: {
                        type:'text',
                        placeholder: 'Country'
                    },
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type:'email',
                        placeholder: 'Your Email'
                    },
                    value: ''
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        option : [
                            {value:'fastest', displayValue: 'Fastest'},
                            {value:'cheapest', displayValue: 'Cheapest'}
                    ]
                    },
                    value: ''
                }
            },
        loading: false
    }
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
                    <Input elementType="..." elementConfig="..." value  ="..." />
                    <Input inputtype="input" type="text" name="email" placeholder="Your Email" />
                    <Input inputtype="input" type="text" name="street" placeholder="Street" />
                    <Input inputtype="input" type="text" name="postal" placeholder="Postal code" />
                    <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>

                </form> 
            </div>
        )
    }
}

export default ContactData;