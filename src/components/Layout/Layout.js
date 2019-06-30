import React, {Component} from 'react'

import './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';

class Layout extends Component {

    render (){
        return(
            <div>     
                <div>
                    <Toolbar />
                    {/* <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/> */}
                </div>
                <main className="content">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;