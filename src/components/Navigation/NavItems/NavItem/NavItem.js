import React from 'react';

import './NavItem.css';

function NavItem(props) {
    return (
        <div>
           <li className="NavItem"><a className={props.active ? 'active' : null} href={props.link}>{props.children}</a></li> 
        </div>
    )
}

export default NavItem;