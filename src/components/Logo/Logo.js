import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogoImage from '../../assets/images/133 burger-logo.png';
import './Logo.css';
 

class Logo extends Component {

    // onLogoClicked = () =>{
    //     this.props.history.push('/');
    // }

    render(){
        return (
            <div className="Logo"  style={{height:this.props.height}}>
               <Link to='/'><img  src={LogoImage} alt="MyBurger" /></Link>
            </div>
        )
    }
}

export default Logo;