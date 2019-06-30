import React from 'react'

import LogoImage from '../../assets/images/133 burger-logo.png';
import './Logo.css';
 
function Logo(props) {
    return (
        <div className="Logo" style={{height:props.height}}>
            <img src={LogoImage} alt="MyBurger" />
        </div>
    )
}

export default Logo;