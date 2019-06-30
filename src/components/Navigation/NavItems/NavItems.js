import React from 'react';

import './NavItems.css';
import NavItem from './NavItem/NavItem';

function NavItems(props) {
    return (
        <ul className="NavItems">
            <NavItem link="/" active={true}>
                Burger Builder
            </NavItem>
            <NavItem link="/">
                Checkout
            </NavItem>
        </ul>
    );
}

export default NavItems;