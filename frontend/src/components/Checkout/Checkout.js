import React from 'react';
import "./style.css";
import PaypalCheckoutButton from "./PaypalCheckoutButton.js";

function Checkout() {
    const product = {
        shows: "Nike",
        price: 29,
    };
  return (
    <div className="checkout">
        <h1>Your Order</h1>
       
        <h1 className="checkout-price">$29</h1>
    
        <div className="separator"></div>
        <div className="paypal">
            <p className="checkout-title">PAY WITH PAYPAL</p>
            <div className="paypal-button-container">
                <PaypalCheckoutButton product={product} />
            </div>
        </div>
    </div>
  )
}

export default Checkout