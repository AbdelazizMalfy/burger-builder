import React from 'react';

import './NavItems.css';
import NavItem from './NavItem/NavItem';

function NavItems(props) {
    return (
        <ul className="NavItems">
            <NavItem link="/" >
                Burger Builder
            </NavItem>
            <NavItem link="/orders">
                Orders
            </NavItem>
        </ul>
    );
}

export default NavItems;