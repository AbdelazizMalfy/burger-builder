import React from 'react'

import './Layout.css';

function Layout(props) {
    return (
        <div>    
            <div>
                toolbar,side drawer , backdrop
            </div>
            <main className="content">
                {props.children}
            </main>
        </div>
    )
}

export default Layout;