import React from 'react';
import { NavLink } from  'react-router-dom';

import './NavItem.css';

function NavItem(props) {
    return (
        <div>
           <li className="NavItem">
               <NavLink activeClassName="active" exact={props.exact} to={props.link}>{props.children}</NavLink></li> 
        </div>
    )
}

export default NavItem;