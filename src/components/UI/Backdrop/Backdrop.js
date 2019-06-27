import React from 'react';

import './Backdrop.css';

function Backdrop(props) {
        
    return (
        <div className="Backdrop" onClick={props.clicked}>
            
        </div>  
    );
}

export default Backdrop;