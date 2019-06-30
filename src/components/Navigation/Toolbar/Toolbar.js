import React from 'react';

import './Toolbar.css';

import NavItems from '../NavItems/NavItems';
import Logo from '../../Logo/Logo';

function Toolbar(props) {
    return (
        <header className="Toolbar">
            <div>MENU</div>
            <Logo height="80%"/>
            <nav>
                <NavItems />
            </nav>
        </header>
    )
}
export default Toolbar;