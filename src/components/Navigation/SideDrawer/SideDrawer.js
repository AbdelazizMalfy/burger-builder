import React from 'react'

import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems';

import './SideDrawer.css';

function SideDrawer(props) {
    return (
        <div className="SideDrawer">
            <Logo height="11%" />
            <nav>
                <NavItems />
            </nav>
        </div>
    )
}

export default SideDrawer;