import React from 'react';

import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

function Modal(props) {
    return (
        <div>
            <Backdrop clicked={props.modalClosed} />
            <div className="Modal">
                {props.children}
            </div>
        </div>
    )
}
export default Modal;