import React from 'react';
import {nanoid} from 'nanoid'

const Price = p => {
    return (
        <div key={nanoid()}>{p.priceOfBooking() > 0 ?
                <span className="price">Total price: {p.priceOfBooking()}som</span>
                : <h4>Order is Empty <br/>Please add some items</h4>}
        </div>
    );
};

export default Price;