import React from 'react'

import './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';

function Layout(props) {
    return (
        <div>    
            <div>
                <Toolbar />
            </div>
            <main className="content">
                {props.children}
            </main>
        </div>
    )
}

export default Layout;