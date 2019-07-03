import React from 'react';

import './Order.css';

function Order(props) {
    return (
        <div className='Order'>
            <p>Ingredients: salad (1)</p>
            <p>Price: <strong>USD 5.55</strong></p>
        </div>
    )
}

export default Order;