import React from 'react'

import './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

function Layout(props) {
    return (
        <div>    
            <div>
                <Toolbar />
                <SideDrawer/>
            </div>
            <main className="content">
                {props.children}
            </main>
        </div>
    )
}

export default Layout;