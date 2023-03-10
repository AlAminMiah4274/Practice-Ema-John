import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2 className='cart-header'>Order Summary</h2>
            <div className='cart-info'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default Cart;